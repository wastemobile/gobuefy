import { shallowMount } from '@vue/test-utils'
import BDatepicker from '@components/datepicker/Datepicker'

import config, {setOptions} from '@utils/config'

let wrapper, defaultProps

const newDate = (y, m, d) => {
    const date = new Date(Date.UTC(y, m, d))
    date.getDate = jest.fn(() => date.getUTCDate())
    return date
}

const defaultMonthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]
const defaultDayNames = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S']
const defaultFirstDayOfWeek = 0

describe('BDatepicker', () => {
    describe('with invalid value from config config', () => {
        beforeEach(() => {
            setOptions(Object.assign(config, {
                defaultMonthNames: 'A string!',
                defaultDayNames: 'A string!',
                defaultFirstDayOfWeek: 'A string!',
                focusedDate: newDate(2018, 7, 1)
            }))

            wrapper = shallowMount(BDatepicker, {
                stubs: {
                    transition: false
                }
            })
        })

        it('should have valid default values', () => {
            expect(wrapper.vm.firstDayOfWeek).toBe(0)
            expect(wrapper.vm.monthNames).toEqual(defaultMonthNames)
            expect(wrapper.vm.dayNames).toEqual(defaultDayNames)
        })
    })

    beforeEach(() => {
        setOptions(Object.assign(config, {
            defaultMonthNames,
            defaultDayNames,
            defaultFirstDayOfWeek,
            focusedDate: newDate(2018, 7, 1)
        }))

        defaultProps = () => ({
            dayNames: config.defaultDayNames,
            monthNames: config.defaultMonthNames,
            focused: {
                month: config.focusedDate.getMonth(),
                year: config.focusedDate.getFullYear()
            }
        })

        wrapper = shallowMount(BDatepicker, {
            propsData: {
                ...defaultProps
            },
            stubs: {
                transition: false
            }
        })
    })

    it('is called', () => {
        expect(wrapper.name()).toBe('BDatepicker')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('render correctly', () => {
        wrapper.setProps({dateCreator: () => {}})
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should have valid default values', () => {
        expect(wrapper.vm.firstDayOfWeek).toBe(0)
        expect(wrapper.vm.monthNames).toEqual(defaultMonthNames)
        expect(wrapper.vm.dayNames).toEqual(defaultDayNames)
    })

    it('react accordingly when setting computedValue', () => {
        const date = new Date()
        wrapper.vm.updateInternalState = jest.fn()
        wrapper.vm.togglePicker = jest.fn()
        wrapper.vm.computedValue = date
        expect(wrapper.vm.updateInternalState).toHaveBeenCalled()
        expect(wrapper.vm.togglePicker).toHaveBeenCalled()
        expect(wrapper.emitted()['input']).toBeTruthy()
    })

    it('react accordingly when changing v-model', () => {
        const date = new Date()
        wrapper.vm.updateInternalState = jest.fn()
        wrapper.vm.togglePicker = jest.fn()
        wrapper.setProps({
            value: date
        })
        expect(wrapper.vm.updateInternalState).toHaveBeenCalled()
        expect(wrapper.vm.togglePicker).toHaveBeenCalled()
    })

    it('set focusedDateData when changing focused date', () => {
        const date = newDate(2019, 8, 26)
        wrapper.setProps({
            focusedDate: date
        })
        expect(wrapper.vm.focusedDateData).toEqual({
            month: date.getMonth(),
            year: date.getFullYear()
        })
    })

    it('react accordingly when calling onChange', () => {
        const date = new Date()
        wrapper.setProps({dateParser: jest.fn()})
        wrapper.vm.onChange(date)
        expect(wrapper.vm.dateParser).toHaveBeenCalled()
    })

    it('react accordingly when calling prev', () => {
        let date = newDate(2019, 8, 26)
        wrapper.setProps({
            focusedDate: date
        })
        wrapper.vm.prev()
        expect(wrapper.vm.focusedDateData.month).toBe(7)

        date = newDate(2019, 0, 26)
        wrapper.setProps({
            focusedDate: date
        })
        wrapper.vm.prev()
        expect(wrapper.vm.focusedDateData.year).toBe(2018)
        expect(wrapper.vm.focusedDateData.month).toBe(11)
    })

    it('react accordingly when calling next', () => {
        let date = newDate(2019, 8, 26)
        wrapper.setProps({
            focusedDate: date
        })
        wrapper.vm.next()
        expect(wrapper.vm.focusedDateData.month).toBe(9)

        date = newDate(2019, 11, 26)
        wrapper.setProps({
            focusedDate: date
        })
        wrapper.vm.next()
        expect(wrapper.vm.focusedDateData.year).toBe(2020)
        expect(wrapper.vm.focusedDateData.month).toBe(0)
    })

    it('handles accordingly focus', () => {
        wrapper.setProps({
            openOnFocus: true
        })
        wrapper.vm.onFocus = jest.fn()
        wrapper.vm.togglePicker = jest.fn()
        wrapper.vm.handleOnFocus()
        expect(wrapper.vm.onFocus).toHaveBeenCalled()
        expect(wrapper.vm.togglePicker).toHaveBeenCalled()
    })

    describe('#dateFormatter', () => {
        it('should add one to month since month in dates starts from 0', () => {
            const dateToFormat = new Date(2019, 3, 1)
            const formattedDate = wrapper.vm.dateFormatter(dateToFormat, wrapper.vm)
            expect(formattedDate).toEqual('2019-4-1')
        })

        it('should format based on 2-digit numeric locale date with type === month', () => {
            wrapper.setProps({
                type: 'month'
            })
            const dateToFormat = new Date(2019, 3, 1)
            const formattedDate = wrapper.vm.dateFormatter(dateToFormat, wrapper.vm)
            expect(formattedDate).toEqual('2019-04')
        })

        it('should format a range of dates passed via array', () => {
            const dateToFormat = [
                new Date(2019, 3, 1),
                new Date(2019, 3, 3)
            ]
            const formattedDate = wrapper.vm.dateFormatter(dateToFormat, wrapper.vm)
            expect(formattedDate).toEqual('2019-4-1 - 2019-4-3')
        })
    })

    describe('#formatValue', () => {
        it('should call dateFormatter, passing the date', () => {
            const mockDateFormatter = jest.fn()
            wrapper.setProps({
                dateFormatter: mockDateFormatter
            })
            const date = new Date()
            wrapper.vm.formatValue(date)
            expect(mockDateFormatter.mock.calls[0][0]).toEqual(date)
        })

        it('should not call dateFormatter when value is undefined or NaN', () => {
            const mockDateFormatter = jest.fn()
            wrapper.setProps({
                dateFormatter: mockDateFormatter
            })
            wrapper.vm.formatValue(undefined)
            expect(mockDateFormatter.mock.calls.length).toEqual(0)
            wrapper.vm.formatValue('buefy')
            expect(mockDateFormatter.mock.calls.length).toEqual(0)
        })

        it('should not call dateFormatter when value is an array with undefined or NaN elements', () => {
            const mockDateFormatter = jest.fn()
            wrapper.setProps({
                dateFormatter: mockDateFormatter
            })
            wrapper.vm.formatValue([new Date(), undefined])
            expect(mockDateFormatter.mock.calls.length).toEqual(0)
            wrapper.vm.formatValue([new Date(), 'buefy'])
            expect(mockDateFormatter.mock.calls.length).toEqual(0)
        })
    })
})
