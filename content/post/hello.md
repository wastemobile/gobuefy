---
title: "Hello, Hugo & Bulma"
isCJKLanguage: true
date: 2019-06-18T11:27:38+08:00
draft: false
---

Hugo 無疑是目前最強悍的靜態網站生成器（SSG - Static Site Generator），據說 5 秒鐘能生成 6000 頁，當然得利於 Go 語言在底層的運作。

而 Bulma 是一個很新的 CSS 框架，完全沒有任何 JavaScript，麻煩之處是必須自行整合，好處也就是極具彈性。

理想狀況是使用 Hugo 製作一個純靜態網站，客製化的 Bulma 利用 Hugo Pipes 在轉製過程中一併處理，網頁上的互動功能都利用最簡單的 jQuery 達成，複雜的則利用 Vue 這個前端 JS 框架。

進階網站需要許多互動功能，善用 Firebase 就能簡化很多，這其中也包含會員的註冊、登入與認證，儲存會員相關的資料（firestore），甚至連靜態檔案（上傳）的存放也能使用 firebase 完成。

## Todo

第一步就是完成 CRUD（Create, Read, Update & Delete），例如讓會員加上書籤（bookmark）或最愛（favorite, star），只需要記錄下某內容頁面的唯一識別（對 Hugo 來說是什麼呢？）= 建立（create）一筆記錄，呈現這些紀錄的清單（read），移除記錄（delete）；修改（update）或許是自行加上標籤、分類或是註記。

> 其實是完全相同的功能，但目前書籤（bookmark）通常是完全私人的，而最愛（類似 Twitter's star）則是公開、有社群與分享意味的。

這就是第一步，做到這些其實就算是真正做到基本了。