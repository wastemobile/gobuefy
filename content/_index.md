---
title: "首頁模板"
date: 2019-06-20T09:43:05+08:00
isCJKLanguage: true
draft: false
summary: "首頁（Index）模板是 list 與 single 之外的特殊模板，內容由 \_index.md 提供。"
---

[Blog](blog/)

動態網站最簡模板僅需 list 與 single 兩種，但一般首頁會是特殊設計（內容組成），因此 Hugo 增加了首頁模板（index），加上清單模板（list），以及內容頁（single）模板就是三種。

> 模板（template）就是使用了 Hugo 語法的 `HTML` 檔；內容檔案則是 `.md`，由 YAML 與 Markdown 組合而成。

模板又可利用「基礎排版檔（baseof）」與「區塊」（block）的概念組合而成，透過呼叫「局部版塊（partials）」以及模板語法的使用，就能製作出千變萬化的呈現樣貌。

### 起步

- 已安裝 Hugo, Node/NPM 與需要的套件。
- `hugo new site gosite` 建立新專案。
- 修改 `config.toml` 中的中文支援。

	```
	baseURL= "/"
	languageCode = "zh-TW"
	defaultContentLanguage = "zh-TW"
	hasCJKLanguage = true
	```

- 修改 `archetypes/default.md` 的中文支援。

	```
	isCJKLanguage: true
	```

- 建立首頁模板與內容。

	Hugo 的內容擺在 `content/` 目錄，模板則在 `layouts/`。

	在還沒建立任何文章之前，先建立 `content/_index.md`，同時建立 `layouts/index.html` 首頁模板，就可以開始學習 Hugo 了。

	先在 `index.html` 模板寫完整的 HTML，再將屬於每頁相同的東西擺進 `_default/baseof.html`、建立 block，首頁模板最後只剩下填入各 block、首頁專屬的模板資料。然後也只留下框架標籤，內容使用 `.Title` 、 `.Summary` 以及 `.Content` 從內容檔 `_index.md` 取得，組出首頁呈現。

	`_index.md` => `index.html` => `baseof.html`

- 使用 Pipes 建立 SASS to CSS 編譯流程。
- 接著建立 `_default/list.html` 預設的清單模板，此時若建立內容目錄 blog（等同 blog section）、並從瀏覽器觀看，預設就會叫用清單模板呈現，也會取用 `blog/_index.md` 提供的詮釋資料與 markdown 內容。


