<!-- 2021-0602 -->

[position](http://zh.learnlayout.com/position.html)

>       TIPS: z-index 属性只对定位元素有效，即 position 值为 absolute,relative,fixed 时才有效

> static: 对象遵循常规流。此时 4 个定位偏移属性不会被应用

> relative: 对象遵循常规流，并且参照自身在常规流中的位置通过 top，right，bottom，left 这 4 个定位偏移属性进行偏移时不会影响常规流中的任何元素

> absolute: 对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到 body 元素。盒子的偏移位置不影响常规流中的任何元素，其 margin 不与其他任何 margin 折叠

> fixed: 与 absolute 一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动

> inherit: 继承父元素的 position 值
