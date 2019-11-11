# CSS

## Table of Contents

1. [用纯 CSS 创建一个三角形的原理是什么?](#css-10)
1. [CSS 块级元素水平居中](#css-11)
1. [CSS 块级元素垂直居中](#css-12)
1. [::before 和 :before 中双冒号和单冒号有什么区别](#css-13)
1. [用 CSS 隐藏页面元素的方法](#css-14)
1. [“resetting” 和 “normalizing” CSS 之间的区别?](#css-15)
1. [设置元素浮动后，该元素的 display 值是什么?](#css-16)
1. [CSS3 新增伪类有哪些?](#css-17)
1. [什么是层叠上下文?](#css-18)
1. [怎么清除浮动?](#css-19)
1. [`<li />`与`<li />`之间有看不见的空白间隔是什么原因引起的?有什么解决办法?](#css-20)
1. [`display`、`position`和`float`的相互关系](#css-21)
1. [CSS 优化、提高性能的方法有哪些?](#css-22)
1. [浏览器如何解析 CSS](#css-23)

### CSS-10

    把 div 的高宽设置为 0，把其中三条 border 设置为 transparent
    .triangle {
        width: 0;
        height: 0;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent red transparent;
    }

### CSS-11

- 给 div 设置一个宽度，然后添加 `margin: 0 auto` 属性

        .center-horizontal {
            width: 200px;(40%)
            margin: 0 auto;
        }

- 使用`flex`布局

        .center-horizontal {
            display: flex;
            justify-content: center;
        }

- 使用`transform`

        .center-horizontal {
            position: relative;(absolute)
            left: 50%;
            transform: translateX(-50%);
        }

### CSS-12

- 使用`transform`

        .center {
            position: relative;
            width: 80px;
            height: 80px;
            top: 50%;
            transform: translate(0, -50%);
        }

- 使用`flex`布局

        .center {
            display: flex;
            align-items: center;
        }

### CSS-13

> CSS3 将伪元素选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。

### CSS-14

- <h4>overflow: hidden;</h4>

> overflow 的 hidden 用来隐藏元素溢出部分，占据空间，无法响应点击事件

- <h4>opacity:0;</h4>

> 元素依然存在原来的位置，占据空间也可响应事件。元素和它所有的内容会被读屏软件阅读

- <h4>visibility:hidden;</h4>

> 被隐藏的元素依然会对我们的网页布局起作用，它不会响应任何用户交互，元素在读屏软件中也会被隐藏

- <h4>display:none;</h4>

> 彻底的隐藏了元素，不占据空间，也就不影响布局，当然也无法响应事件

- <h4>position:absolute;left:-9999px;top:-9999px;</h4>

> 不占据空间，无法点击

- <h4>position:relative;left:-9999px;top:-9999px;</h4>

> 占据空间，无法点击

- <h4>z-index:-1000;</h4>

> 不占据空间，无法点击

- <h4>transform: scale(0,0);</h4>

> 占据空间，无法点击

### CSS-15

[normalize.css](https://github.com/necolas/normalize.css)

> Normalize.css 只是一个很小的 CSS 文件，但它在默认的 HTML 元素样式上提供了跨浏览器的高度一致性。相比于传统的 CSS reset，Normalize.css 是一种现代的、为 HTML5 准备的优质替代方案。

### CSS-16

>       display: block;

### CSS-17

- E:first-of-type: 匹配同类型中的第一个同级兄弟元素 E

- E:last-child: 匹配父元素的最后一个子元素 E

- E:only-child: 匹配父元素仅有的一个子元素 E

- E:nth-child(n): 匹配父元素的第 n 个子元素 E，假设该子元素不是 E，则选择符无效

- E:nth-last-child(n): 匹配父元素的倒数第 n 个子元素 E，假设该子元素不是 E，则选择符无效

- E:only-of-type: 匹配同类型中的唯一的一个同级兄弟元素 E

- E:nth-of-type(n): 匹配同类型中的第 n 个同级兄弟元素 E

- E:checked: 匹配用户界面上处于选中状态的元素 E

- E:enabled: 匹配用户界面上处于可用状态的元素 E

- E:disabled: 匹配用户界面上处于禁用状态的元素 E

### CSS-18

[The stacking context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

[关于 z-index 那些你不知道的事](https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892)

[z-index 和叠加上下文是如何形成](https://www.jianshu.com/p/d50d1cccbf70)

[深入理解 CSS 中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

> 层叠上下文是 HTML 元素的三维概念，这些 HTML 元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的 z 轴上延伸，HTML 元素依据其自身属性按照优先级顺序占用层叠上下文的空间

### CSS-19

[清除浮动](http://www.cnblogs.com/ForEvErNoME/p/3383539.html)

> 使用 `clear` 属性: 在浮动元素后使用一个空元素如`<div style="clear: both;" />`即可清理浮动。或者给浮动元素后面的元素添加 `clear` 属性

> 使用 `overflow` 属性: 给浮动元素的容器添加 `overflow:hidden;`或 `overflow:auto;`可以清除浮动。在添加 `overflow` 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果

> 使用 `:after` 伪元素: 给浮动元素的容器添加一个`:after`伪元素实现元素末尾添加一个看不见的块元素清理浮动

### CSS-20

> <h4>原因:</h4> 浏览器的默认行为是把 `inline` 元素间的空白字符(空格/换行/tab)渲染成一个空格，也就是`li`换行后会产生换行字符，而它会变成一个空格，当然空格就占用一个字符的宽度。

> <h4>解决方案</h4>

- 因为`<li />`换行导致的，那就可以将`<li />`代码全部写在一排

- 空格占一个字符的宽度，将`<ul>`内的字符尺寸直接设为 0，`ul { font-size: 0; }`

- 设置`<li />`内的字符间隔，`ul { letter-spacing: -5px; }`

### CSS-21

[position 跟 display、margin collapse、overflow、float 这些特性相互叠加后会怎么样？
](https://dbaron.org/css/test/sec0907)

[Relationships between display, position, and float
](http://www.cnblogs.com/jackyWHJ/p/3756087.html)

![display_position_float](https://twk-public.oss-cn-beijing.aliyuncs.com/display_position_float.png)

### CSS-22

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

### CSS-23

[探究 CSS 解析原理](http://jartto.wang/2017/11/13/Exploring-the-principle-of-CSS-parsing/)

[How CSS Works](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
