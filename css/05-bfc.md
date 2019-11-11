[BFC 背后的神奇原理](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)

- 定义
  BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干

- 触发条件

1. 根元素
2. 浮动元素
3. 绝对定位元素
4. `display` 取值为 `inline-block`,`flex`, `inline-flex` 之一的元素
5. `overflow` 不是 `visible` 的元素

- 布局规则

1. 内部的 Box 会在垂直方向，一个接一个地放置
2. Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
3. 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触。即使存在浮动也是如此
4. BFC 的区域不会与 float box 重叠
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
6. 计算 BFC 的高度时，浮动元素也参与计算
