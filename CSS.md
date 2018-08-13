# CSS Questions

## Questions

1.  [页面导入样式时，使用 link 和@import 有什么区别?](#css-1)
1.  [css 的引入方式有哪些?](#css-2)
1.  [介绍一下标准的 CSS 的盒子模型和低版本 IE 的盒子模型](#css-3)
1.  [CSS 选择符有哪些?](#css-4)
1.  [CSS 哪些属性可以继承?](#css-5)
1.  [CSS 优先级算法](#css-6)
1.  [说说常用的 display 取值](#css-7)
1.  [说说常用的 position 取值](#css-8)
1.  [说说 BFC](#css-9)
1.  [用纯 CSS 创建一个三角形的原理是什么?](#css-10)
1.  [CSS 块级元素水平居中](#css-11)
1.  [CSS 块级元素垂直居中](#css-12)
1.  [::before 和 :before 中双冒号和单冒号有什么区别](#css-13)
1.  [用 CSS 隐藏页面元素的方法](#css-14)
1.  [“resetting” 和 “normalizing” CSS 之间的区别?](#css-15)
1.  [设置元素浮动后，该元素的 display 值是什么?](#css-16)
1.  [CSS3 新增伪类有哪些?](#css-17)
1.  [什么是层叠上下文?](#css-18)
1.  [怎么清除浮动?](#css-19)
1.  [`<li />`与`<li />`之间有看不见的空白间隔是什么原因引起的?有什么解决办法?](#css-20)
1.  [`display`、`position`和`float`的相互关系](#css-21)
1.  [CSS 优化、提高性能的方法有哪些?](#css-22)

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
> 1.  嵌入方式：在 HTML 头部中的 `<style>` 标签下书写 CSS 代码
> 1.  链接方式：使用 HTML 头部的 `<head>` 标签引入外部的 CSS 文件
> 1.  导入方式：使用 CSS 规则引入外部 CSS 文件

### CSS-3

> CSS 盒子模型：由 margin、border、padding、content 组成

> content-box：width = contentWidth；height = contentHeight

> border-box：width = contentWidth + padding + border；height = contentHeight + padding + border

### CSS-4

[CSS 选择器](http://www.ruanyifeng.com/blog/2009/03/css_selectors.html)

1.  通用选择器:【`*`】匹配任何元素
1.  标签选择器:【`E`】匹配所有使用`E`标签的元素
1.  class 选择器:【`.info`】匹配所有 class 属性中包含`info`的元素
1.  id 选择器:【`#info`】匹配 id 属性等于`info`的元素
1.  多元素选择器:【`E,F`】同时匹配所有 E 元素或 F 元素
1.  后代选择器:【`E F`】匹配所有属于 E 元素后代的 F 元素
1.  子选择器:【`E>F`】匹配所有 E 元素的子元素 F
1.  相邻选择器:【`E+F`】匹配所有紧随 E 元素之后的同级元素 F
1.  属性选择器

    > 【E[att]】匹配所有具有 att 属性的 E 元素，不考虑它的值

    > 【E[att=val]】匹配所有 att 属性等于"val"的 E 元素

    > 【E[att~=val]】匹配所有 att 属性具有多个空格分隔的值、其中一个值等于"val"的 E 元素

    > 【E[att|=val]】匹配所有 att 属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的 E 元素，主要用于 lang 属性，比如"en"、"en-us"、"en-gb"等等

    > 【E[att^=val]】属性 att 的值以 val 开头的元素

    > 【E[att$=val]】属性 att 的值以 val 结尾的元素

    > 【E[att*=val]】属性 att 的值包含 val 字符串的元素

1.  伪类

    > 【E:first-child】
    > 【E:link】
    > 【E:active】
    > 【E:hover】
    > 【E:focus】
    > 【E:lang(c)】
    > 【E:enabled】
    > 【E:disabled】
    > 【E:checked】
    > 【E::selection】

1.  伪元素

    > 【E:first-line】
    > 【E:first-letter】
    > 【E:before】
    > 【E:after】

1.  同级元素通用选择器
    > 【E~F】匹配任何在 E 元素之后的同级 F 元素

### CSS-5

>     TIPS：`a` 标签的字体颜色不能被继承；`<h1>-<h6>`标签字体的大下也是不能被继承的；因为它们都有一个默认值

> 字体系列属性【font、font-family、font-weight、font-size、font-style、font-variant】

> 文本系列属性【text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、text-transform、direction、color】

> 元素可见性【visibility】

> 表格布局属性【caption-side、border-collapse、empty-cells】

> 列表属性【list-style-type、list-style-image】

> 光标属性【cursor】

### CSS-6

> 是由四个级别和各个级别出现的次数决定的,值从左到右,左面的最大,一级大于一级

> 每个规则对应一个初始四位数:0,0,0,0

> 若是行内样式优先级,则是 1,0,0,0,高于外部定义

> 若是 ID 选择符,则分别加 0,1,0,0

> 若是类选择符,属性选择符,伪类选择符,则分别加 0,0,1,0

> 若是元素选择器,伪类选择器,则分别加 0,0,0,1

> !important 的优先级是最高的,但出现冲突时则需比较"四位数"

> 优先级相同时,则采用就近原则

> 继承得来的属性,其优先级最低

### CSS-7

> inline: 默认值，指定元素为内联元素，不可设置宽高

> inline-block: 内联块元素，可设置宽高

> block: 块元素

> none: 隐藏元素，在页面中不占据空间

> flex

> inline-flex

### CSS-8

[position](http://zh.learnlayout.com/position.html)

>       TIPS: z-index 属性只对定位元素有效，即 position 值为 absolute,relative,fixed 时才有效

> static: 对象遵循常规流。此时 4 个定位偏移属性不会被应用

> relative: 对象遵循常规流，并且参照自身在常规流中的位置通过 top，right，bottom，left 这 4 个定位偏移属性进行偏移时不会影响常规流中的任何元素

> absolute: 对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到 body 元素。盒子的偏移位置不影响常规流中的任何元素，其 margin 不与其他任何 margin 折叠

> fixed: 与 absolute 一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动

> inherit: 继承父元素的 position 值

### CSS-9

[BFC 背后的神奇原理](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)

> <h4>定义：</h4>BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干

> <h4>触发条件：</h4>

- 根元素；
- float 属性不为 none；
- position 为 absolute 或 fixed；
- display 为 inline-block, table-cell, table-caption, flex, inline-flex；
- overflow 不为 visible

> <h4>布局规则：</h4>

- 内部的 Box 会在垂直方向，一个接一个地放置
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触。即使存在浮动也是如此
- BFC 的区域不会与 float box 重叠
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
- 计算 BFC 的高度时，浮动元素也参与计算

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
        减少阻塞加载，不要用 @import，使用link

- 选择器性能

        避免使用复杂的选择器，层级越少越好
        精简页面的样式文件，去掉不用的样式，利用CSS继承减少代码量
        慎重选择高消耗的样式(就是绘制前需要浏览器进行大量计算的属性)

- 渲染性能

        避免过分重排、重绘
