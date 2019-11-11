[CSS 性能优化笔记](https://segmentfault.com/a/1190000007336987)

[网页性能管理详解](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

[两张图解释 CSS 动画的性能](https://github.com/ccforward/cc/issues/42)

- 加载性能

  减少文件体积，压缩代码
  减少阻塞加载，不要用 @import，使用 link

- 选择器性能

  避免使用复杂的选择器，层级越少越好
  精简页面的样式文件，去掉不用的样式，利用 CSS 继承减少代码量
  慎重选择高消耗的样式(就是绘制前需要浏览器进行大量计算的属性)

- 渲染性能

  避免过分重排、重绘

- 代码书写
  多个 css 合并，尽量减少 HTTP 请求
  将 css 文件放在页面最上面
  移除空的 css 规则
  避免使用 CSS 表达式
  选择器优化嵌套，尽量避免层级过深
  抽象提取公共样式，减少代码量
  属性值为 0 时，不加单位
  属性值为小于 1 的小数时，省略小数点前面的 0
