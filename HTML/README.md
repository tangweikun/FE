# HTML Questions

## Questions

1.  [DocType 有什么作用？严格模式和混杂模式的区别？](#HTML-1)
1.  [介绍一下你对浏览器内核的理解？](#HTML-2)
1.  [常见的浏览器内核有哪些？](#HTML-3)
1.  [常见的浏览器 Javascript 引擎有哪些？](#HTML-4)
1.  [为什么最好把 CSS 的`<link>`标签放在`<head></head>`之间？为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前？](#HTML-5)
1.  [简述一下你对 HTML 语义化的理解？](#HTML-6)

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

> 把<link>标签放在<head></head>之间是规范要求的。这种做法可以让页面逐步呈现，防止呈现给用户空白的页面或没有样式的内容，提高了用户体验。
> 脚本在下载和执行期间会阻止 HTML 解析。把<script>标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

### HTML-6

> 用正确的标签做正确的事情。
> html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
> 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
> 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
> 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
