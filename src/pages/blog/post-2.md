---
layout: "../../layouts/BlogPostLayout.astro"
title: Simple Twitter開發過程反思
date: 2023-06-28
author: Tim Kao
description: Twitter專案的期限為期兩週，有分為4人前後分離以及3人的全端開發，依照規定的規格完成本次的專案...
draft: false
category: Record
---

<br/>


![simple twitter image](/images/twitter.gif)
<p class="text-center text-sm">simple twitter https://tim0124.github.io/simple-twitter/</p>
<br/>
Twitter專案的期限為期兩週，有分為4人前後分離以及3人的全端開發，依照規定的規格完成本次的專案。在開始前其實會有點擔心溝通的問題，原因是沒有經歷過多人協作，所以多少會有點擔心大家會不會都不太討論。

<br/>
<br/>

## 擔任的角色：
<br/>
我們這組是採前後分離，我是擔任前端的開發人員，專案初期在還沒開始之前，我跟另一位前端夥伴就開始討論了，我們都是線上討論，幾乎都是每天開始開發時都在線上通話XD，只要其中一方有遇到問題就馬上提出討論，盡量不讓問題持續延續下去，除非是當前真的無法解決的問題才會先跳過，繼續開發其他項目，不去耽誤到進度。
<br/>
<br/>

## 負責的項目：
<br/>
我們兩個在這個部分比較沒有太多意見，主要以頁面component劃分，都是認領自己想要做的項目，也因為都是整天保持線上通話開發，所以很多時候都是互相幫忙解決彼此的問題，好處是隨時都知道對方的進度及問題點在哪。
<br/>
<br/>

## 遇到的困難：
<br/>
git問題
在正式開始前四天我就跟另一位前端夥伴開始著手討論，在開發前還有一個重要的東西就是Git，我們在前兩天光是弄Git就花了很多時間，要嘛推上不去不然就是拉不下來，遇到的問題還不只一次，先前的作業都是單人開發，所以在Git上就不會有衝突的問題，好像是我們把Git想得太複雜了，當初我們兩個同時都在dev的分支上進行修改沒有額外再開分支開發，才會遇到很多問題，後續我們直接不用dev這個分支，而是在main分支分別開了她的分支和我使用的分支，沒有因為要開發額外功能再去開分支了，也因為這個專案繳交版本只會有一個最終版本，所以我們才決定開發完一個項目就合併到main上，我知道通常一般是不會這麼做，但因為專案的特性，我們也必須要期限內完成，就只能先找出一個解決方案，讓我們在後續開發上可以順利執行。
<br/>
<br/>

#### **切版規格問題**
<br/>
看了wireframe後有滿多頁面要切的，起初另一位夥伴一開始是沒有打算要做RWD，因為RWD算是挑戰功能，但我跟她分享說我在先前的一份購物車的作業，就是先做了電腦版再去做手機版，相對會改的很麻煩，如果日後要將這份twitter專案當作是我們履歷的一部分，我認為RWD是必備的條件之一，我們達成共識後就決定連同RWD挑戰規格一起做了。
在開賽前兩天我們就開始切版，前期的切版都是先切出主要的元件後續再調整細節的東西，我們預計是五天完成所有的切版，因為包含RWD最後還趕不上預期的進度，我們在開賽後第四天才完成所有切版，後續我再進行各個元件的組裝，組裝上遇到的問題也不大，就是需要調整一些排版的樣式。
<br/>
<br/>

#### **串接API**
<br/>
切完版才是困難的開始，在API串接上我們兩個都沒有什麼經驗，老實說當時在做完todolist的教案後，我還不是很了解API的串接及useEffect的用法，在主頁的API串接我們就花了大概一天的時間研究，後來我是去看了Vue教案講解API串接的方法才比較有概念，成功串了一支API後，後面其實就大同小異，但在串接過程還是有遇到拿不到200回應的問題，通常這時我們就是馬上找後端討論，討論看是我們寫法有問題還是後端需要更改規格，我們這組的優點就是不會讓問題存在太久，遇到問題就立馬解決。開發途中遇到規格需要額外的屬性或是單獨一支額外的API，後端的夥伴都可以使命必達，有這樣的隊友真的很給力！
<br/>
<br/>

#### **伺服器500**
<br/>
請求次數超過3600，這個問題是在我們開發中期時常常遇到的問題，前期只遇過一兩次，後面發現這個問題越來越常發生，在某一天因為出現了3–4次導致當天進度無法順利執行，我尋求朋友開始檢查我們寫的每個useEffect有沒有寫到會一直發出請求的問題，找到是dependency的原因，我才瞭解dependency只能放基本型別的東西，後端也將他們的寫法進行優化，改善這些問題後，我們就沒有再遇到這個問題了。
<br/>
<br/>

## 可以改進的地方：
<br/>
一開始在串接API時我們並沒有討論好要用哪一種方式編寫，變成我們兩個寫的方式有兩種，沒有統一選擇一種來寫，我覺得這是未來開發上要注意的其中一個部分，還有初期API規格的討論我們並沒有跟後端夥伴討論太多，而是把我們覺得應該會需要的規格開給後端，讓後端去編寫，因為我對於開API規格也沒有任何經驗，覺得只要後端寫的出來應該就可以用吧，所以在開發途中，有時候會因為API規格問題耗費許多時間。
<br/>
<br/>

![simple twitter dev api](/images/twitter-API.png)
<br/>
<br/>

## 總結：
<br/>
這是一次非常難得的協作經驗，從一開始對前端如何分工感到苦惱，再對要如何與後端取得資料感到困惑，在這次的開發過程一一解惑，並讓我成長許多不論是切版經驗、React技能、API串接和前後端溝通與討論，都是非常寶貴的經驗。
最後要感謝我的組員們，在開賽前一週面臨到必須拆組，因為很多組別都是1前2後的情況，面臨到拆組時，我第一個找後端的隊員是Jason，原因是因為最一開始就是Jason找我加入的，後續是因為很多組都面臨到拆組，而他是那個唯一跳出來控場的人，先撇開他後端的能力與否，我覺得他是一個很為大家著想的人，就像一個大哥哥一樣，可以跟他一組就算遇到問題，也可以提出一個很好意見的夥伴，所以當初拆組後我就決定要找他，在這個短時間內必須要趕快找到另一位前端夥伴，不然又會無法成組，當我看到另一位前端夥伴Iris是全職學習，我就覺得是一個很好的協作機會，我們都是全職學習就可以全心全意在開發這個專案上，後續就馬上就密她，而她剛好也有帶一位後端夥伴阿嘉，我們就在很短時間達成共識湊成一組了，也許這就是我們的緣分吧！ 感謝我的夥伴們Jason、Iris、阿嘉👍
