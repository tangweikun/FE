#### 功能检测（feature detection）

> 功能检测包括确定浏览器是否支持某段代码，以及是否运行不同的代码（取决于它是否执行），以便浏览器始终能够正常运行代码功能，而不会在某些浏览器中出现崩溃和错误。例如：

```js
if ('geolocation' in navigator) {
  // 可以使用 navigator.geolocation
} else {
  // 处理 navigator.geolocation 功能缺失
}
```

#### 功能推断（feature inference）

> 功能推断与功能检测一样，会对功能可用性进行检查，但是在判断通过后，还会使用其他功能，因为它假设其他功能也可用，非常不推荐这种方式。功能检测更能保证万无一失。例如：

```js
if (document.getElementsByTagName) {
  element = document.getElementById(id);
}
```

#### UA 字符串

> 这是一个浏览器报告的字符串，它允许网络协议对等方（network protocol peers）识别请求用户代理的应用类型、操作系统、应用供应商和应用版本。它可以通过 navigator.userAgent 访问。 然而，这个字符串很难解析并且很可能存在欺骗性。例如，Chrome 会同时作为 Chrome 和 Safari 进行报告。因此，要检测 Safari，除了检查 Safari 字符串，还要检查是否存在 Chrome 字符串。不要使用这种方式。
