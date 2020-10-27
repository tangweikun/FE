<!-- 2020-10-26 -->

### JSONP

<!-- TODO: 实现JSONP-->

[How to use JSON padding to bypass the Same Origin Policy](https://medium.freecodecamp.org/use-jsonp-and-other-alternatives-to-bypass-the-same-origin-policy-17114a5f2016)

> jsonp 是一种跨域通信的手段，它的原理其实很简单。首先是利用 script 标签的 src 属性来实现跨域。通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。由于使用 script 标签的 src 属性，因此只支持 get 方法。

### JSONP 安全性问题

#### CSRF 攻击

前端构造一个恶意页面，请求 JSONP 接口，收集服务端的敏感信息。如果 JSONP 接口还涉及一些敏感操作或信息（比如登录、删除等操作），那就更不安全了。

解决方法：验证 JSONP 的调用来源（Referer），服务端判断 Referer 是否是白名单，或者部署随机 Token 来防御。

#### XSS 漏洞

不严谨的 `content-type` 导致的 XSS 漏洞，想象一下 JSONP 就是你请求 `http://youdomain.com?callback=douniwan`, 然后返回 `douniwan({ data })`，那假如请求 `http://youdomain.com?callback=<script>alert(1)</script>` 不就返回 `<script>alert(1)</script>({ data })`了吗，如果没有严格定义好 `Content-Type(Content-Type: application/json)`，再加上没有过滤 `callback` 参数，直接当 html 解析了，就是一个赤裸裸的 XSS 了。

解决方法：严格定义 `Content-Type: application/json`，然后严格过滤 `callback` 后的参数并且限制长度（进行字符转义，例如<换成&lt，>换成&gt）等，这样返回的脚本内容会变成文本格式，脚本将不会执行
