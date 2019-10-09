---
title: "It's Time to Own My Own Content"
description: "Why I am moving away from Medium"
isCJKLanuage: true
summary: "必須要區分 description 與 summary 的作用"
date: 2019-04-27T10:24:49+08:00
draft: false
---

由於 Hugo 有一種特定的 **type （Content Types）** 型態，有點像是網站內容組織的最上層，也與「區塊」（section）密切相關，這可能也與 Hugo 使用終端機指令來新增內容有關，當輸入 `hugo new blog/some-post.md` 代表了「這個內容擺放在 **blog** 區塊，其對應的預設「內容型態」也叫做 **blog**」，同時它可能有一組獨特的詮釋資料（預先設計在 **archetypes** 中），在尋找模板時也有較高的優先匹配。

> 在某主題中就看到在不同 type 目錄下，分別設置基礎模板（`baseof.html`）的設計法。

## 內容準備

預先替網站開發準備好一組內容，有不少東西必須注意，從單篇的詮釋資料、格式，一直到內容檔案在目錄中的組織方式；也包含「靜態素材」（Static Files），就是那些會直接複製到網站目錄的素材。

應該就是說明文件中 [Content Management](https://gohugo.io/content-management/) 整個區段，一開始或許無法全面，但基本的必須顧及。

## What's Wrong With Medium

Despite it's many advantages, I feel Medium is lacking in some areas.

#### Poor Support For Source Code

Poor support is really an understatement, Medium has no support for source code. I understand Medium is not intended for developers, so I don't expect features like syntax highlighting. However, making the "source" container scroll on overflow would have made all the difference.
