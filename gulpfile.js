"use strict";

const del = require("del");
const gulp = require("gulp");
const merge = require("merge-stream");
const rename = require("gulp-rename");

// Clean vendor
function clean() {
	return del([
		"./assets/vendor/",
		"./static/vendor/"
	]);
}

// Copy dependencies from node_modules into vendor directory
function modules() {
	// Bulma
	var bulmaSass = gulp.src('./node_modules/bulma/sass/**/*')
		.pipe(gulp.dest('./assets/vendor/bulma/sass'));
	var bulma = gulp.src('./node_modules/bulma/bulma.sass')
		.pipe(gulp.dest('./assets/vendor/bulma'));
	var buefy = gulp.src('./node_modules/buefy/src/**/*')
		.pipe(gulp.dest('./assets/vendor/buefy'));
	var buefyJs = gulp.src('./node_modules/buefy/dist/buefy.min.js')
		.pipe(gulp.dest('./static/vendor/buefy'));
	var vue = gulp.src('./node_modules/vue/dist/vue.min.js')
		.pipe(gulp.dest('./static/vendor/vue'));
	var fontAwesome = gulp.src('./node_modules/@fortawesome/**/*')
		.pipe(gulp.dest('./static/vendor'));
	

	return merge(bulmaSass, bulma, buefy, buefyJs, vue, fontAwesome);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);

// Export tasks
exports.clean = clean;
exports.vendor = vendor;
exports.default = vendor;