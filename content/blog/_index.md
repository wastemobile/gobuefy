---
title: "Blog"
date: 2019-06-20T21:40:32+08:00
isCJKLanguage: true
draft: false
summary: "Default short description for content."
---

檔案位於 `content/blog/_index.md`，是 Hugo 定義的 **Index Pages**。我們已經在 `content/` 根目錄下擺放了一個 `_index.md` 內容檔，替首頁模板提供內容，事實上 `_index.md` 適用的範圍更廣，它的基本定義是「替清單模板提供詮釋資料與內容」，因此包含：

- [清單模板（list templates）](https://gohugo.io/templates/lists/)
- [首頁模板（homepage template）](https://gohugo.io/templates/homepage/)
- [網站區段模板（section templates）](https://gohugo.io/templates/section-templates/)
- [分類模板（taxonomy templates）](https://gohugo.io/templates/taxonomy-templates/)
- [分類詞彙模板（taxonomy terms templates](https://gohugo.io/templates/taxonomy-templates/)

> Section 實際上就是網站的基本組織架構，也對應著網址（URL）。（原始）內容根目錄 `content/` 即等同網站根目錄 `https://site.name/`，也被稱為**根區域（root sections）**。

### Section template

一般只在 `_default` 目錄下建置 `list.html` 清單模板，所有叫用非單獨內容頁面時都會使用。