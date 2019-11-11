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
