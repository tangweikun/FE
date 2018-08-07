# CSS Questions

## Questions

1.  [页面导入样式时，使用 link 和@import 有什么区别？](#CSS-1)
1.  [css 的引入方式有哪些？](#CSS-2)

## Answers

### CSS-1

> @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
> 加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载，所以会出现一开始没有 css 样式，闪烁一下出现样式后的页面(网速慢的情况下)
> @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。
> 可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式。

### CSS-2

>     TIPS：尽量使用 <link> 标签导入外部 CSS 文件，避免或者少用使用其他三种方式
>
> 1.  内联方式：直接在 HTML 标签中的 style 属性中添加 CSS
> 1.  嵌入方式：在 HTML 头部中的 <style> 标签下书写 CSS 代码
> 1.  链接方式：使用 HTML 头部的 <head> 标签引入外部的 CSS 文件
> 1.  导入方式：使用 CSS 规则引入外部 CSS 文件
