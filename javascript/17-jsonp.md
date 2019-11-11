### JSONP

<!-- TODO: 实现JSONP-->

[How to use JSON padding to bypass the Same Origin Policy](https://medium.freecodecamp.org/use-jsonp-and-other-alternatives-to-bypass-the-same-origin-policy-17114a5f2016)

> jsonp 是一种跨域通信的手段，它的原理其实很简单。首先是利用 script 标签的 src 属性来实现跨域。通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。由于使用 script 标签的 src 属性，因此只支持 get 方法。
