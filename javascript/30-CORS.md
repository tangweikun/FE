<!-- 2020-10-27 -->

### 什么是 CORS

`CORS`（跨域资源共享`Cross-origin resource sharing`）允许浏览器向跨域服务器发出 `XMLHttpRequest` 请求，从而克服跨域问题，它需要浏览器和服务器的同时支持

- 浏览器端会自动向请求头添加 `origin` 字段，表明当前请求来源
- 服务器端需要设置响应头的`Access-Control-Allow-Methods`，`Access-Control-Allow-Headers`，`Access-Control-Allow-Origin`等字段，指定允许的方法，头部，源等信息。
- 请求分为简单请求和非简单请求，非简单请求会先进行一次 `OPTION` 方法进行预检，看是否允许当前跨域请求
