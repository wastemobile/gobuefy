# Data

## [Customize Dates](https://gohugo.io/content-management/multilingual/#customize-dates)

原則上目前均不使用 Hugo i18n 功能，因為各種設定非常麻煩，目前也無此需求。官網有一個這樣的範例：因為目前 Go 尚未支援本地化日期，因此透過 hugo data 功能暫時對應一個，下面是模板中的用法。

```
<time class="post-date" datetime="{{ .Date.Format '2006-01-02T15:04:05Z07:00' | safeHTML }}">
  文章發布於： {{ .Date.Day }} {{ index $.Site.Data.mois (printf "%d" .Date.Month) }} {{ .Date.Year }} （最後修改於： {{ .Lastmod.Day }} {{ index $.Site.Data.mois (printf "%d" .Lastmod.Month) }} {{ .Lastmod.Year }}）
</time>
```