# HTML Questions

## Questions

1.  [DocType 有什么作用？严格模式和混杂模式的区别？](#html-1)
1.  [介绍一下你对浏览器内核的理解？](#html-2)
1.  [常见的浏览器内核有哪些？](#html-3)
1.  [常见的浏览器 Javascript 引擎有哪些？](#html-4)
1.  [为什么最好把 CSS 的`<link>`标签放在`<head></head>`之间？为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前？](#html-5)
1.  [简述一下你对 HTML 语义化的理解？](#html-6)
1.  [`<script>`、`<script async>` 和 `<script defer>` 的区别？](#html-7)
1.  [描述一下 cookie,sessionStorage,localStorage 的区别？](#html-8)
1.  [网页验证码是干嘛的，是为了解决什么安全问题？](#html-9)
1.  [页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？](#html-10)
1.  [渐进增强和优雅降级](#html-11)
1.  [对比`document`的`load`和`DomContentLoaded`](#html-12)
1.  [浏览器的同源策略](#html-13)
1.  [什么是单页应用?](#html-14)
1.  [为什么单页应用不利于 SEO?](#html-15)
1.  [如果需要手动写动画，你认为最小时间间隔是多久?](#html-16)
1.  [什么是 Cookie 隔离?](#html-17)
1.  [浏览器的渲染原理](#html-18)
1.  [DNS 原理及其解析过程](#html-19)
1.  [HTTP 缓存](#html-20)
1.  [如何实现浏览器内多个标签页之间的通信](#html-21)
1.  [visibilityState](#html-22)
1.  [浏览器结构](#html-23)

## Answers

### HTML-1

> <!DOCTYPE>声明位于HTML文档的第一行，它告知浏览器使用哪种HTML/XHTML规范来解析这个文档；DOCTYPE不存在活格式不正确将导致文档以兼容模式呈现。

> 严格模式指的是浏览器按照 W3C 标准解析执行代码；混杂模式则是使用浏览器自己的方式解析执行代码。

### HTML-2

> 浏览器内核由渲染引擎和 JS 引擎组成，不同的浏览器、即使同一浏览器不同型号可能渲染引擎和 JS 引擎都不一样。

> 渲染引擎：负责 HTML、CSS 的解析，页面布局、渲染与复合层合成。

> JS 引擎：解析和执行 javascript 代码

### HTML-3

> Trident：IE,360,搜狗浏览器

> Gecko：Mozilla Firefox

> Presto：Opera[Opera 内核原为：Presto，现为：Blink;]

> Webkit：Safari，Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

> Edge： Win10 中 IE 浏览器

> Blink：Chrome

### HTML-4

> JScript： IE

> spiderMonkey： Mozilla Firefox

> V8： Google Chrome

> linear b/futhark： Opera

### HTML-5

> 把`<link>`标签放在`<head></head>`之间是规范要求的。这种做法可以让页面逐步呈现，防止呈现给用户空白的页面或没有样式的内容，提高了用户体验。

> 脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

### HTML-6

> 用正确的标签做正确的事情。

> html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;

> 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;

> 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;

> 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

### HTML-7

> 没有 defer 或 async，把 JS 文件加载完成并执行后，再加载页面其它文档内容。

> 有 async，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）但 JS 文件一旦加载完成就立即执行，不管其他内容有没有加载或解析，执行的时候其它页面内容暂停加载

> 有 defer，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）JS 文件加载完成后会延迟等待其他内容加载或解析完成后才会执行

![async vs defer](https://twk-public.oss-cn-beijing.aliyuncs.com/async-vs-defer-attributes.png)

### HTML-8

> cookie 数据始终在同源的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递；sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存

> cookie 是网站为了标示用户身份而储存在用户本地终端上的数据

> cookie 数据大小不能超过 4k；sessionStorage 和 localStorage 数据大小可以达到 5M 或更大

> localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage 数据在当前浏览器窗口关闭后自动删除；cookie 设置的 cookie 过期之前一直有效，即使关闭窗口或者浏览器关闭

> sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；localStorage、cookie 在所有同源窗口中都是共享的

### HTML-9

> 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试

### HTML-10

[原文地址](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

1.  在浏览器地址栏中输入域名 maps.google.com
2.  DNS 解析

    > 浏览器检查缓存中的 DNS 记录，以查找 map.google.com 的相对应 IP，依次在【浏览器缓存—>操作系统缓存—>路由器缓存—>ISP 缓存】中查找

    > 如果请求的 URL 不在缓存中，ISP 的 DNS 服务器将启动 DNS 查询以查找托管 maps.google.com 的服务器的 IP 地址【根域名服务器缓存—>顶级域名服务器缓存—>主域名服务器缓存】

3.  浏览器与服务器建立一条 TCP 连接
4.  浏览器向服务器发送一条 HTTP 请求
5.  服务器处理请求并返回 HTTP 响应
6.  浏览器解析渲染页面

### HTML-11

> 渐进增强(Progressive Enhancement): 一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。

> 优雅降级(Graceful Degradation): 一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。

### HTML-12

[Page lifecycle: DOMContentLoaded, load, beforeunload, unload](http://javascript.info/onload-ondomcontentloaded#domcontentloaded)

> `DOMContentLoaded` 浏览器已经完全加载了 HTML，DOM 树已经构建完毕，但是像是 <img> 和样式表等外部资源可能并没有下载完毕。

> `load` 浏览器已经加载了所有的资源（图像，样式表等）

> `beforeunload/unload` 当用户离开页面的时候触发

### HTML-13

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

> 浏览器安全的基石是"同源政策"

> 如果两个页面的协议，端口和域名都相同，则两个页面具有相同的源

### HTML-14

> <h4>定义:</h4> SPA 是一种网络应用程序的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序

> <h4>优点:</h4> 无刷新体验；完全的前端组件化，组件共享；API 共享，减少服务端的工作

> <h4>缺点:</h4> 首次加载大量资源；不利于 SEO

### HTML-15

> seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的 js 的。如果一个单页应用在服务器端还没有渲染数据，在浏览器才渲染出数据，则搜索引擎请求到的 html 是没有渲染数据的。 这样就很不利于内容被搜索引擎搜索到。 所以服务端渲染就是尽量在服务器发送到浏览器前，页面上就是有数据的。

### HTML-16

       多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms

### HTML-17

        如果静态文件都放在主域名下，那静态文件请求的时候都是带着 cookie 数据提交给 server 的，非常浪费流量，所以不如隔离开。
        因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
        这样可以降低请求头的大小，减少请求时间，从而达到降低整体请求延时的目的。
        同时这种方式不会将 cookie 传入Web Server，也减少了Web Server 对 cookie 的处理分析环节，提高了 Web Server 的http请求的解析速度。

### HTML-18

[How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)

[浏览器的渲染原理简介](https://coolshell.cn/articles/9666.html)

<img src="https://twk-public.oss-cn-beijing.aliyuncs.com/webkit_flow.png" width="600" />

        处理 HTML 标记并构建 DOM 树
        处理 CSS 标记并构建 CSSOM 树
        将 DOM 与 CSSOM 合并成一个渲染树
        根据渲染树来布局，以计算每个节点的几何信息
        将各个节点绘制到屏幕上

>       TIPS: 这五个步骤并不一定一次性顺序完成。如果 DOM 或 CSSOM 被修改，以上过程需要重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染

### HTML-19

[DNS 原理及其解析过程](http://blog.51cto.com/369369/812889)

### HTML-20

[HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)

[HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)

[HTTP 缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn)

[彻底弄懂 Http 缓存机制](https://zhuanlan.zhihu.com/p/24467558)

### HTML-21

> 使用 localStorage
> 使用 cookie

### HTML-22

[Page Visibility API](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)

### HTML-23

<img src="http://taligarsiel.com/Projects/layers.png" width="600" />

> <h4>用户界面</h4> 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面

> <h4>浏览器引擎</h4> 在用户界面和呈现引擎之间传送指令

> <h4>渲染引擎(</h4> 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上

> <h4>网络</h4> 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现

> <h4>用户界面后端</h4> 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法

> <h4>JavaScript 解释器</h4> 用于解析和执行 JavaScript 代码

> <h4>数据存储</h4> 浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库
