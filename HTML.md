# HTML Questions

## Table of Contents

1.  [渐进式渲染](#渐进式渲染)
1.  [cache busting](#cache-busting)
1.  [`e.getAttribute` and `e.propName`](#getAttribute-and-propName)
1.  [capture and bubble](#capture-and-bubble)
1.  [移动端 300ms 点击延迟](#移动端300ms点击延迟)
1.  [DDOS](#ddos)
1.  [域名收敛和域名发散](#域名收敛和域名发散)
1.  [Difference between`for...of`and`for...in`](#difference-between-for-of-and-for-in)
1.  [`target`与`currentTarget`的区别](#target与currentTarget的区别)
1.  [经常遇到的浏览器的兼容性有哪些](#经常遇到的浏览器的兼容性有哪些)
1.  [`attribute`和`property`之间有什么区别](#`attribute`和`property`之间有什么区别)
1.  [DOM 事件的绑定的几种方式](#dom-事件的绑定的几种方式)
1.  [html global attribute](#html-global-attribute)
1.  [Cross-site scripting](#cross-site-scripting)
1.  [Cross Site Request Forgery](#cross-site-request-forgery)
1.  [`DocType`有什么作用?严格模式和混杂模式的区别](#doctype有什么作用严格模式和混杂模式的区别)
1.  [介绍一下你对浏览器内核的理解?](#介绍一下你对浏览器内核的理解)
1.  [常见的浏览器内核有哪些?](#常见的浏览器内核有哪些)
1.  [常见的浏览器`Javascript`引擎有哪些?](#常见的浏览器javascript引擎有哪些)
1.  [为什么最好把`CSS`的`<link>`标签放在`<head></head>`之间?为什么最好把`JS`的`<script>`标签恰好放在`</body>`之前?](#为什么最好把css的link标签放在headhead之间为什么最好把js的script标签恰好放在body之前)
1.  [简述一下你对`HTML`语义化的理解?](#简述一下你对html语义化的理解)
1.  [简述`<script> <script async> <script defer>`的区别?](#简述script-script-async-script-defer的区别)
1.  [描述一下`cookie`,`sessionStorage`,`localStorage`的区别?](#描述一下cookiesessionStoragelocalStorage的区别)
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

### 渐进式渲染

> progressive rendering

[浏览器的渲染：过程与原理](https://zhuanlan.zhihu.com/p/29418126)

### cache busting

[cache busting](https://curtistimson.co.uk/post/front-end-dev/what-is-cache-busting/)

### getAttribute and propName

[DOM 元素 e 的 e.getAttribute(propName)和 e.propName 有什么区别和联系](https://funteas.com/topic/5906ab598783c1370b809c45)

### capture and bubble

[JS 中事件冒泡与捕获](https://segmentfault.com/a/1190000005654451)

[一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获](https://www.cnblogs.com/greatluoluo/p/5882508.html)

### 移动端 300ms 点击延迟

[移动端 300ms 点击延迟和点击穿透
](https://juejin.im/post/5b3cc9836fb9a04f9a5cb0e0)

### DDOS

[什么是 DDoS 攻击](https://www.zhihu.com/question/22259175)

### 域名收敛和域名发散

[无线性能优化：域名收敛](http://taobaofed.org/blog/2015/12/16/h5-performance-optimization-and-domain-convergence/)

### Difference between for of and for in

[for-of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

### target 与 currentTarget 的区别

- `target`只会出现在事件流的目标阶段,`currentTarget`可能出现在事件流的任何阶段
- 当事件流处在目标阶段时，二者的指向相同
- 当事件流处于捕获或冒泡阶段时`currentTarget`指向当前事件活动的对象(一般为父级)

### 经常遇到的浏览器的兼容性有哪些

- 浏览器默认的 margin 和 padding 不同

### `attribute`和`property`之间有什么区别

[What is the difference between properties and attributes in HTML](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)

> `Attribute` 是在 HTML 中定义的，而 `property` 是在 DOM 上定义的。为了说明区别，假设我们在 HTML 中有一个文本框：`<input type="text" value="Hello">`。

```js
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello
```

> 但是在文本框中键入“ World!”后:

```js
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello World!
```

### dom 事件的绑定的几种方式

[通过原生 js 对 DOM 事件的绑定的几种方式总汇](http://www.fly63.com/article/detial/184)

- 直接在 DOM 元素绑定事件
- 在 JavaScript 代码中绑定
- 绑定事件监听函数

### html global attribute

[Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

### Cross-site scripting

[Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)

[浅说 XSS 和 CSRF](https://github.com/dwqs/blog/issues/68)

### Cross Site Request Forgery

[CSRF 攻击的应对之道](https://github.com/dwqs/blog/issues/68)

### `DocType`有什么作用?严格模式和混杂模式的区别?

> <!DOCTYPE>声明位于HTML文档的第一行，它告知浏览器使用哪种HTML/XHTML规范来解析这个文档；DOCTYPE不存在或格式不正确将导致文档以兼容模式呈现。

> 严格模式指的是浏览器按照 W3C 标准解析执行代码；混杂模式则是使用浏览器自己的方式解析执行代码。

### 介绍一下你对浏览器内核的理解?

> 浏览器内核由渲染引擎和 JS 引擎组成，不同的浏览器、即使同一浏览器不同型号可能渲染引擎和 JS 引擎都不一样。

> 渲染引擎：负责 HTML、CSS 的解析，页面布局、渲染与复合层合成。

> JS 引擎：解析和执行 javascript 代码

### 常见的浏览器内核有哪些?

> Trident：IE,360,搜狗浏览器

> Gecko：Mozilla Firefox

> Presto：Opera[Opera 内核原为：Presto，现为：Blink;]

> Webkit：Safari，Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

> Edge： Win10 中 IE 浏览器

> Blink：Chrome

### 常见的浏览器`Javascript`引擎有哪些?

> JScript： IE

> spiderMonkey： Mozilla Firefox

> V8： Google Chrome

> linear b/futhark： Opera

### 为什么最好把`CSS`的`<link>`标签放在`<head></head>`之间?为什么最好把`JS`的`<script>`标签恰好放在`</body>`之前?

> 把`<link>`标签放在`<head></head>`之间是规范要求的。这种做法可以让页面逐步呈现，防止呈现给用户空白的页面或没有样式的内容，提高了用户体验。

> 脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

### 简述一下你对`HTML`语义化的理解?

> 用正确的标签做正确的事情。

> html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;

> 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;

> 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;

> 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

### 简述`<script> <script async> <script defer>`的区别?

> 没有 defer 或 async，把 JS 文件加载完成并执行后，再加载页面其它文档内容。

> 有 async，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）但 JS 文件一旦加载完成就立即执行，不管其他内容有没有加载或解析，执行的时候其它页面内容暂停加载

> 有 defer，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）JS 文件加载完成后会延迟等待其他内容加载或解析完成后才会执行

![async vs defer](https://twk-public.oss-cn-beijing.aliyuncs.com/async-vs-defer-attributes.png)

### 描述一下`cookie`,`sessionStorage`,`localStorage`的区别?

> cookie 数据始终在同源的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递；sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存

> cookie 是网站为了标示用户身份而储存在用户本地终端上的数据

> cookie 数据大小不能超过 4k；sessionStorage 和 localStorage 数据大小可以达到 5M 或更大

> localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage 数据在当前浏览器窗口关闭后自动删除；cookie 设置的 cookie 过期之前一直有效，即使关闭窗口或者浏览器关闭

> sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；localStorage、cookie 在所有同源窗口中都是共享的

### 网页验证码是干嘛的,是为了解决什么安全问题?

> 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试

### 页面从输入`URL`到页面加载显示完成,这个过程中都发生了什么?

[原文地址](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

1.  在浏览器地址栏中输入域名 maps.google.com
2.  DNS 解析

    > 浏览器检查缓存中的 DNS 记录，以查找 map.google.com 的相对应 IP，依次在【浏览器缓存—>操作系统缓存—>路由器缓存—>ISP 缓存】中查找

    > 如果请求的 URL 不在缓存中，ISP 的 DNS 服务器将启动 DNS 查询以查找托管 maps.google.com 的服务器的 IP 地址【根域名服务器缓存—>顶级域名服务器缓存—>主域名服务器缓存】

3.  浏览器与服务器建立一条 TCP 连接
4.  浏览器向服务器发送一条 HTTP 请求
5.  服务器处理请求并返回 HTTP 响应
6.  浏览器解析渲染页面

### 渐进增强和优雅降级

> 渐进增强(Progressive Enhancement): 一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。

> 优雅降级(Graceful Degradation): 一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。

### 对比`document`的`load`和`DomContentLoaded`

[Page lifecycle: DOMContentLoaded, load, beforeunload, unload](http://javascript.info/onload-ondomcontentloaded#domcontentloaded)

> `DOMContentLoaded` 浏览器已经完全加载了 HTML，DOM 树已经构建完毕，但是像是 `<img>` 和样式表等外部资源可能并没有下载完毕。

> `load` 浏览器已经加载了所有的资源（图像，样式表等）

> `beforeunload/unload` 当用户离开页面的时候触发

### 浏览器的同源策略

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

> 浏览器安全的基石是"同源政策"

> 如果两个页面的协议，端口和域名都相同，则两个页面具有相同的源

### 什么是单页应用?

> <h4>定义:</h4> SPA 是一种网络应用程序的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序

> <h4>优点:</h4> 无刷新体验；完全的前端组件化，组件共享；API 共享，减少服务端的工作

> <h4>缺点:</h4> 首次加载大量资源；不利于 SEO

### 为什么单页应用不利于`SEO`?

> `SEO`本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的 js 的。如果一个单页应用在服务器端还没有渲染数据，在浏览器才渲染出数据，则搜索引擎请求到的 html 是没有渲染数据的。 这样就很不利于内容被搜索引擎搜索到。 所以服务端渲染就是尽量在服务器发送到浏览器前，页面上就是有数据的。

### 如果需要手动写动画,你认为最小时间间隔是多久?

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60\*1000ms ＝ 16.7ms

### 什么是`Cookie`隔离?

如果静态文件都放在主域名下，那静态文件请求的时候都是带着 cookie 数据提交给 server 的，非常浪费流量，所以不如隔离开。
因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有 cookie 数据，
这样可以降低请求头的大小，减少请求时间，从而达到降低整体请求延时的目的。
同时这种方式不会将 cookie 传入 Web Server，也减少了 Web Server 对 cookie 的处理分析环节，提高了 Web Server 的 http 请求的解析速度。

### 浏览器的渲染原理

[How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)

[浏览器的渲染原理简介](https://coolshell.cn/articles/9666.html)

<img src="https://twk-public.oss-cn-beijing.aliyuncs.com/webkit_flow.png" width="600" />

        处理 HTML 标记并构建 DOM 树
        处理 CSS 标记并构建 CSSOM 树
        将 DOM 与 CSSOM 合并成一个渲染树
        根据渲染树来布局，以计算每个节点的几何信息
        将各个节点绘制到屏幕上

>       TIPS: 这五个步骤并不一定一次性顺序完成。如果 DOM 或 CSSOM 被修改，以上过程需要重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染

### `DNS`原理及其解析过程

[DNS 原理及其解析过程](http://blog.51cto.com/369369/812889)

### 事件代理

如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上

```js
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  let ul = document.querySelector('#ul')
  ul.addEventListener('click', (event) => {
    console.log(event.target);
  })
</script>
```

事件代理的方式相对于直接给目标注册事件来说，有以下优点

- 节省内存
- 不需要给子节点注销事件

### 如何实现浏览器内多个标签页之间的通信

> 使用 localStorage

> 使用 cookie

> websocket

### visibilityState

[Page Visibility API](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)

<br>[⬆ Back to top](#)

### 浏览器结构

[How Browsers Work](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

<img src="http://taligarsiel.com/Projects/layers.png" width="600" />

> <h4>用户界面</h4> 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面

> <h4>浏览器引擎</h4> 在用户界面和呈现引擎之间传送指令

> <h4>渲染引擎</h4> 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上

> <h4>网络</h4> 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现

> <h4>用户界面后端</h4> 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法

> <h4>JavaScript 解释器</h4> 用于解析和执行 JavaScript 代码

> <h4>数据存储</h4> 浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库

### 如何关闭表单自动填充

[如何关闭表单自动填充](https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)

>       网页可以将 `autocomplete` 的属性设置为 `off`

### 谈谈你对前端性能优化的理解

[15 年双 11 手淘前端技术巡演 - H5 性能最佳实践](https://github.com/amfe/article/issues/21)

[前端性能优化之移动端浏览器优化策略](https://juejin.im/post/5a45d8e2f265da431e1715b9)

[前端工程与性能优化](https://div.io/topic/371)

[浅谈前端性能优化](https://www.jianshu.com/p/ead7dab72cd6)

[Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html?guccounter=1)

[14 Rules for Faster-Loading Web Sites](http://stevesouders.com/hpws/rules.php)

- <h4>请求数量</h4>

> 合并脚本和样式表，CSS Sprites，拆分初始化负载，划分主域

- <h4>请求带宽</h4>

> 开启 GZip，精简 JavaScript，移除重复脚本，图像优化，将 icon 做成字体

- <h4>缓存利用</h4>

> 使用 CDN，使用外部 JavaScript 和 CSS，添加 Expires 头，减少 DNS 查找，配置 ETag，使 AjaX 可缓存

- <h4>页面结构</h4>

> 将样式表放在顶部，将脚本放在底部，尽早刷新文档的输出

- <h4>代码校验</h4>

> 避免 CSS 表达式，避免重定向

- <h4>使用HTTP/2</h4>

- <h4>预加载</h4>

> 静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie

### `Cookie`的弊端

[请你谈谈 Cookie 的弊端](https://blog.csdn.net/qq_24192465/article/details/78114286)

- 每个特定的域名下最多生成的 cookie 个数有限制
- IE 和 Opera 会清理近期最少使用的 cookie，Firefox 会随机清理 cookie
- cookie 的最大大约为 4096 字节，为了兼容性，一般不能超过 4095 字节
- 安全性问题。如果 cookie 被人拦截了，那人就可以取得所有的 session 信息

### `document.write`和`innerHTML`的区别

> `document.write` 是直接写入到页面的内容流，如果在写之前没有调用 document.open, 浏览器会自动调用 open。每次写完关闭之后重新调用该函数，会导致页面被重写。

> `innerHTML` 则是 DOM 页面元素的一个属性，代表该元素的 html 内容。你可以精确到某一个具体的元素来进行更改。如果想修改 document 的内容，则需要修改 `document.documentElement.innerElement`。

> `innerHTML` 很多情况下都优于 `document.write`，其原因在于其允许更精确的控制要刷新页面的那一个部分。

### 前端路由

[前端路由一探](https://www.w3cplus.com/javascript/front-end-routing.html)

[你真的了解前端路由吗](https://juejin.im/post/5b5ec5dd6fb9a04fc564b72d)

### curl

[curl 网站开发指南](http://www.ruanyifeng.com/blog/2011/09/curl.html)

[curl](https://curl.haxx.se/)

### 事件触发三阶段

- `window` 往事件触发处传播，遇到注册的捕获事件会触发
- 传播到事件触发处时触发注册的事件
- 从事件触发处往 `window` 传播，遇到注册的冒泡事件会触发

事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。

```js
// 以下会先打印冒泡然后是捕获
node.addEventListener('click', event => console.log('冒泡'), false);
node.addEventListener('click', event => console.log('捕获 '), true);
```

### 注册事件

通常我们使用 `addEventListener` 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 `useCapture` 参数来说，该参数默认值为 `false` `。useCapture` 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

- `capture`，布尔值，和 `useCapture` 作用一样
- `once`，布尔值，值为 `true` 表示该回调只会调用一次，调用后会移除监听
- `passive`，布尔值，表示永远不会调用 `preventDefault`

一般来说，我们只希望事件只触发在目标上，这时候可以使用 stopPropagation 来阻止事件的进一步传播。通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。stopImmediatePropagation 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

```js
node.addEventListener(
  'click',
  event => {
    event.stopImmediatePropagation();
    console.log('冒泡');
  },
  false,
);
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener(
  'click',
  event => {
    console.log('捕获 ');
  },
  true,
);
```

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
