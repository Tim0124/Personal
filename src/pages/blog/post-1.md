---
layout: "./src/layouts/BlogPostLayout.astro"
title: what is “this” ?
date: 2023-03-10
author: Tim Kao
description: 在學期2–2的翻牌遊戲中使用了MVC架構，這也是我第一次使用這個架構，剛開始使用還不太熟悉...
draft: false
category: JavaScript
---

<br/>
在學期2–2的翻牌遊戲中使用了MVC架構，這也是我第一次使用這個架構，剛開始使用還不太熟悉，但使用完後會發現程式碼變得很有條理，在實作這個專案時就使用到了很多this，所以就想開始查找資料整理成筆記要來一探究竟。
<br/>
<br/>

### 在JavaScript中this是一個關鍵字，但需要取決於在哪裡使用它
<br/>

1. 在全域中使用this，在沒有任何物件或事件底下使用時，就代表window本身(嚴格模式下的全域中使用this會回傳undefined，所以在使用this時要特別注意上下文)。
<br/>
<br/>

2. 在物件底下使用this，當在一個物件底下加入一個函式，使用this時這時候會將this指向到物件本身，this的方法就是所屬物件本身。
<br/>
<br/>

```
const person = {
  name: 'Tim',
  action (){
    console.log(`Hi,my name is ${this.name}`)
  }
}
person.action()
```
<br/>
<br/>

3. 在事件監聽器中使用this，通常是指向觸發的事件元素，但如果在監聽器中使用箭頭函示，this並不會指向事件本身，而會指向全域物件，所以用箭頭函式在使用this時要特別注意
<br/>
<br/>

```
const button = document.querySelector('.button')
button.addEventListener('click', function onButtonClicked(){
  console.log(this) //<button class="button">add</button>
})
const button = document.querySelector('.button')
button.addEventListener('click', () => {
  console.log(this) //window{...}
})
```