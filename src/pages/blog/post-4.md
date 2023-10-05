---
layout: "../../layouts/BlogPostLayout.astro"
title: Tailwind CSS學習心得
date: 2023-09-21
author: Tim Kao
description: 用過Bootstrap後，大部分的專案或作業都是手刻，直到做完twitter專案後，在某次的飛航學習了解到tailwind...
draft: false
category: tailwindcss
---
<br/>

![image](/images/tailwindCSS-image.png)
<br/>
 在Twitter專案結束後，發現在這個兩週所產出的專案還有很多進步的空間，在某次的飛航學習室，意外的看到Kelly學姊的side project，就覺得整體的使用者體驗很流暢，也藉機詢問是怎麼做出骨架(skeleton)的效果，當時Kelly學姊有說他是用了Tailwind做的，當下也沒近一步詢問是怎麼做的，開始搜尋Tailwind是什麼，才知道原來是CSS框架，類似於Bootstrap，但Tailwind有更多的彈性及自訂性，完全可依照需求進行客製化開發，看了官方文件照著安裝及嘗試，就這樣自己摸索和看影片，也成功將原本的Twitter專案小小的優化一下。
<br/>
<br/>

![image](/images/twitter-skeleton2.gif)
<p class="text-center text-sm">(在尚未取得資料前的簡單佈局，避免讓網頁呈現一片空白)</p> 
<br/>
<br/>

套上專案實作過後就稍微有點概念了，所以我打算使用Tailwind來開發個人網站，藉由透過實作來讓我更加熟悉與了解，剛開始很多樣式的名稱還不熟悉，例如：設定行高(line-height),就要寫成leading，時常要邊寫邊翻文件，因為多次重複的撰寫，越來越知道樣式的名稱，也變得上手許多。
<br/>
<br/>
在Tailwind有很多規範好的大小或是顏色，如果需要自定義字體、顏色、大小或響應式寬度，也可以在tailwind.config.js的檔案來定義。很建議如果要使用Tailwind開發，可以在VS Code上安裝 <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" class="text-light-blue hover:underline" target="_blank">Tailwind CSS IntelliSense</a>，這個擴充功能可以加快編寫的速度，不需要把樣式名稱完整的記起來，就可以輕鬆達到自己想要的樣式，也不用擔心有寫到重複的屬性，當有重複的屬性時就會提示你錯誤訊息。
<br/>
<br/>

![image](/images/tailwind.png)
<br/>
<br/>

### 優點
用到現在我覺得好處還是很多的，優點是在撰寫樣式時真的快很多，像是在寫響應式設計的時候就能快速地製作出來，可以很彈性的擴充自己想要額外的樣式，因為每個樣式都是寫在class裡面，所以要查找修改的時候也蠻方面的，不太需要尋找整個專案的CSS檔案，也不用一直想class要怎麼命名XD。
<br/>
<br/>

### 缺點
剛開始在使用Tailwind時，會發現class變得很長一串，剛看起來也會有點不太習慣，但其實寫久了就還好了。
<br/>
<br/>

### 總結
我覺得Tailwind是一個很好用的CSS框架，了解CSS的樣式後再去學習Tailwind，上手難度就不會太高，前期學習的適應期就是要花時間記一些常用的樣式名稱，和翻閱文件查找樣式名稱，總結來說滿推薦使用Tailwind，找到適合自己的工具才是好工具。