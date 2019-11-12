# HTML Questions

## Table of Contents

1.  [cache busting](#cache-busting)
1.  [capture and bubble](#capture-and-bubble)
1.  [移动端 300ms 点击延迟](#移动端300ms点击延迟)
1.  [DDOS](#ddos)
1.  [域名收敛和域名发散](#域名收敛和域名发散)
1.  [`target`与`currentTarget`的区别](#target与currentTarget的区别)
1.  [经常遇到的浏览器的兼容性有哪些](#经常遇到的浏览器的兼容性有哪些)
    )
1.  [DOM 事件的绑定的几种方式](#dom-事件的绑定的几种方式)
1.  [html global attribute](#html-global-attribute)
1.  [Cross-site scripting](#cross-site-scripting)
1.  [Cross Site Request Forgery](#cross-site-request-forgery)
1.  [常见的浏览器`Javascript`引擎有哪些?](#常见的浏览器javascript引擎有哪些)
1.  [为什么最好把`CSS`的`<link>`标签放在`<head></head>`之间?为什么最好把`JS`的`<script>`标签恰好放在`</body>`之前?](#为什么最好把css的link标签放在headhead之间为什么最好把js的script标签恰好放在body之前)
1.  [简述一下你对`HTML`语义化的理解?](#简述一下你对html语义化的理解)
1.  [简述`<script> <script async> <script defer>`的区别?](#简述script-script-async-script-defer的区别)
1.  [网页验证码是干嘛的,是为了解决什么安全问题?](#网页验证码是干嘛的是为了解决什么安全问题)
1.  [页面从输入`URL`到页面加载显示完成,这个过程中都发生了什么?](#页面从输入url到页面加载显示完成,这个过程中都发生了什么)
1.  [渐进增强和优雅降级](#渐进增强和优雅降级)
1.  [对比`document`的`load`和`DomContentLoaded`](#对比document的load和domcontentloaded)
1.  [浏览器的同源策略](#浏览器的同源策略)
1.  [什么是单页应用?](#什么是单页应用)
1.  [为什么单页应用不利于`SEO`?](#为什么单页应用不利于seo)
1.  [如果需要手动写动画,你认为最小时间间隔是多久?](#如果需要手动写动画你认为最小时间间隔是多久)
1.  [什么是`Cookie`隔离?](#什么是cookie隔离)
1.  [浏览器的渲染原理](#浏览器的渲染原理)
1.  [`DNS`原理及其解析过程](#dns原理及其解析过程)
1.  [事件代理](#事件代理)
1.  [如何实现浏览器内多个标签页之间的通信](#如何实现浏览器内多个标签页之间的通信)
1.  [visibilityState](#visibilitystate)
1.  [浏览器结构](#浏览器结构)
1.  [如何关闭表单自动填充](#如何关闭表单自动填充)
1.  [谈谈你对前端性能优化的理解](#谈谈你对前端性能优化的理解)
1.  [`Cookie`的弊端](#cookie的弊端)
1.  [`document.write`和`innerHTML`的区别](#documentwrite和innerhtml的区别)
1.  [前端路由](#前端路由)
1.  [curl](#curl)
1.  [事件触发三阶段](#事件触发三阶段)
1.  [注册事件](#注册事件)
1.  [如何渲染几万条数据并不卡住界面](#如何渲染几万条数据并不卡住界面)
1.  [Does document.onload and window.onload fire at the same time?](#does-document.onload-and-window-onload-fire-at-the-same-time)
1.  [What are the different ways to get an element from DOM?](#what-are-the-different-ways-to-get-an-element-from-dom)
1.  [前端需要注意哪些`SEO`](前端需要注意哪些seo)

### 移动端 300ms 点击延迟

[移动端 300ms 点击延迟和点击穿透
](https://juejin.im/post/5b3cc9836fb9a04f9a5cb0e0)

### DDOS

[什么是 DDoS 攻击](https://www.zhihu.com/question/22259175)

### `attribute`和`property`之间有什么区别

[What is the difference between properties and attributes in HTML](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)

[DOM 元素 e 的 e.getAttribute(propName)和 e.propName 有什么区别和联系](https://funteas.com/topic/5906ab598783c1370b809c45)

> `Attribute` 是在 HTML 中定义的，而 `property` 是在 DOM 上定义的。为了说明区别，假设我们在 HTML 中有一个文本框：`<input type="text" value="Hello">`。

```js
const input = document.querySelector("input");
console.log(input.getAttribute("value")); // Hello
console.log(input.value); // Hello
```

> 但是在文本框中键入“ World!”后:

```js
console.log(input.getAttribute("value")); // Hello
console.log(input.value); // Hello World!
```

### html global attribute

[Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

### Cross-site scripting

[Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)

### 如果需要手动写动画,你认为最小时间间隔是多久?

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60\*1000ms ＝ 16.7ms

### 如何渲染几万条数据并不卡住界面

> 不能一次性将几万条都渲染出来，而应该一次渲染部分 DOM，那么就可以通过 `requestAnimationFrame` 来每 16 ms 刷新一次

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <ul>控件</ul>
  <script>
    setTimeout(() => {
      // 插入十万条数据
      const total = 100000
      // 一次插入 20 条，如果觉得性能不好就减少
      const once = 20
      // 渲染数据总共需要几次
      const loopCount = total / once
      let countOfRender = 0
      let ul = document.querySelector("ul");
      function add() {
        // 优化性能，插入不会造成回流
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
          const li = document.createElement("li");
          li.innerText = Math.floor(Math.random() * total);
          fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
      }
      function loop() {
        if (countOfRender < loopCount) {
          window.requestAnimationFrame(add);
        }
      }
      loop();
    }, 0);
  </script>
</body>
</html>
```

### Does document.onload and window.onload fire at the same time?

> `window.onload` is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded. This means everything is loaded.

> `document.onload` is fired when DOM (DOM tree built from markup code within the document)is ready which can be prior to images and other external content is loaded.

### What are the different ways to get an element from DOM?

- `getElementById` to get a element that has the provided Id.
- `getElementsByClassName` to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a class name.
- `getElementsByTagName` to get a nodelist by the provided tag name.
- `querySelector` you will pass css style selector (jquery style) and this will return first matched element in the DOM.
- `querySelectorAll` will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. Non-live means, any changes after selecting the elements will not be reflected.

### 前端需要注意哪些`SEO`

- 合理的`title`、`description`、`keywords`: 搜索对这三项的权重逐个减小,`title`值强调重点即可,重要关键词出现不要超过 2 次,而且要靠前,不同页面`title`要有所不同;`description`把页面内容高度概括,长度合适,不可过分堆砌关键词,不同页面`description`有所不同;`keywords`列举出重要关键词即可
- 语义化的`HTML`代码,符合`W3C`规范: 语义化代码让搜索引擎容易理解网页
- 重要内容`HTML`代码放在最前: 搜索引擎抓取`HTML`顺序是从上到下,有的搜索引擎对抓取长度有限制,保证重要内容一定会被抓取
- 重要内容不要用`js`输出: 爬虫不会执行`js`获取内容
- 少用`iframe`: 搜索引擎不会抓取`iframe`中的内容
- 非装饰性图片必须加`alt`
- 提高网站速度: 网站速度是搜索引擎排序的一个重要指标

<br>[⬆ Back to top](#)
