---
layout: "../../layouts/BlogPostLayout.astro"
title: 使用Astro打造個人網頁
date: 2023-10-11
author: Tim Kao
description: 想到的第一個side project就是做出個人網站，看了很多網路上的作品，最後決定使用Astro來打造...
draft: false
category: astro
---
<br/>

![astro](/images/astro-image.png)

在當前的前端開發領域中，我們有許多優秀的框架可供選擇，像是 Gatsby、Next.js 等。而我選擇了比較新的Astro來進行開發，吸引我的原因在於 Astro 不僅能製作靜態網頁，而且它輕量、快速，並且能與 React、Preact、Vue 等 UI 框架結合，這讓開發變得非常方便。
<br/>
<br/>

## Astro是什麼？
**Astro 是一個多合一的網頁框架，以內容為中心，並以伺服器優先的方式進行渲染**

<br/>

### 以內容為主

Astro是以內容為中心的網站，例如部落格、作品集或電子商務網站，相比現代大多是數網站都是建立網頁應用程式所設計的，以內容為主的網站變得快速和高效。
| 如果是要設計網頁應用程式那就不適合用選擇Astro，反而使用Next.js會來得比較適合。
<br/>
<br/>

### 以伺服器優先
Astro主要使用伺服器端渲染而非客戶端渲染，好處是不需要再學習新語言來使用，因為Astro的內容就是以HTML、CSS和JavaScript(也可以使用TypeScript)編寫。
<br/>
<br/>

### 預設很快
許多網頁框架很容易可以建立出一個看起來很棒的網站，但部署後載入速度會變得非常慢。罪魁禍首通常是JavaScript，因為使用者的手機的速度無法比得上開發者的電腦。
Astro將上述兩種價值(以內容為中心和伺服器優先MPA架構)結合，創造出快速的網站。
<br/>
<br/>

### 方便使用
Astro創造了屬於自己的(.astro)UI語言，該語言深受HTML影響，並結合了JSX表達式和預設的CSS作用域的功能。
<br/>
<br/>

### 靈活且功能齊全
Astro是一個多合一的網頁框架，Astro提供組件、路由、資料處理、建構流程、打包、優化和資料獲取等。可以只用Astro核心功能就能建構出一個良好的網站。
可以透過超過 100 種的整合，能夠擴展 Astro，包括 React、Svelte、Vue、Tailwind CSS 和 MDX。也可以輕鬆連接到不同的CMS並部署到多種主機上。
<br/>
<br/>

## 為何選擇Astro
我一開始打算在個人網站除了放上作品以及一些使用者操作的功能外，還想把Blog也一起放進去。當時我看到Astro的Blog教學可以讀取markdown的檔案，讓我覺得應該滿適合的，一方面想體驗這個很新的框架。
<br/>
<br/>

## 開始建構個人網站
老實說，在剛開始建構的時候沒有什麼太多的想法，就是一直在看網路上看他人的網站當作參考，會看別人的網站有什麼樣的功能、RWD的排版是怎麼做的或是整體網站的佈局和配色，這些都是在我考量的範圍，但看了很多其實還是沒有什麼頭緒，就告訴自己先開始做就對了。開始動手做之後就有了一點想法，慢慢的想法就越來越多，自己就會想做這個功能也想做那個功能，然後開始實現。
<br/>
<br/>

## 探索Astro功能
在建構網站的過程中，我研究了Astro的一些功能。並將它們結合到我的網站中，這邊就稍微紀錄幾個在Astro可能會常用到的功能
<br/>
<br/>

1. Astro.props()
<br/>
元件間傳遞任何值的一個功能，如果是寫TypeScript，也可以定義props的型別


```
//index.astro
---
import Button from '../components/Button.astro'
---
<Button text='Click' />
```
```
//Button.astro
---
const { text } = Astro.props
---
<button>{text}</button>

```

<br/>

2. Astro.glob()
<br/>
可以指定一個或許多檔案載入到靜態網站中的一種方法

```
---
const allPosts = await Astro.glob('../pages/blog/*.md')
---
<div>
  {
    allposts.map((post) => (
      <article>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.description}</p>
        <a href={post.rul}>Read more</a>
      </article>
    ))  
  }
</div>
```

<br/>

3. getStaticPaths()
<br/>
在頁面的檔案名稱中使用動態參數，該元件需要匯出一個getStaticPaths()的函數，會返回一個物件陣列。如要將資料傳遞到每個產生的頁面，也可以在裡面使用。

```
---
export async function getStaticPaths()  {
  return [
    {
      params: { category: ("Record")},
      props: { name: "Record"},
    },
    {
      params: { category: ("JavaScript")},
      props: { name: "JavaScript"},
    },
    {
      params: { category: ("astro")},
      props: { name: "astro"},
    },
    {
      params: { category: ("tailwindcss")},
      props: { name: "tailwindcss"},
    },
  ]
}

const { category } = Astro.params
const { name } = Astro.props
---
HTML template ...
```
<br/>

## 優化和部署
<br/>

### 圖片優化
在一個網頁中除了JavaScript會讓網頁載入速度變慢，還有另一個是圖片的大小也有關係。在Astro中使用一般的img tag不會有任何處理和優化的作用，所以可以選擇使用Astro提供的Image元件，可以使圖片最佳化。
<br/>
<br/>

#### Image元件
- 優化圖片大小
- 根據原始寬高比去推斷寬高，以避免累計版面配置位移(CLS)
- 預設載入格式是.webp，也可以手動變更其他格式
- 調整圖片品質，可選擇(low,mid,hight,max)或是0~100的數字

| 特別注意在使用Image元件時，alt屬性是必填的。
<br/>
<br/>

### 部署
最後，在完成網站的基本架構後，我優化了網站，確保載入時的速度不會太慢，並且在各種裝置上正常運作。我選擇使用Netlify，將網站部署到線上，並使用lighthouse前端稽核功能，看看是否有需要改進的地方(某些圖片載入速度過慢、無障礙功能不足)，雖然這個評分不能作為唯一的依據，但對我來說能夠了解自己網站效能的不足之處，這點很重要。

![lighthouse](/images/lighthouse.jpg)
<br/>

## 總結
雖然最後我花了許多時間才完成的網站，也深刻了解其中還有很多改進的空間，這段期間，我明白到了不一定要追求完美，因為如果每件事都要做到完美，大部分可能不會有進展了。有時我就是因為過分考慮而拖延，覺得某些部分不夠完美或不太對，而無法前進。這正是我一開始遇到的困境。最後我領悟到，重要的是踏出第一步，按照現在的能力去做就是對的，這是我想告訴現在的自己。