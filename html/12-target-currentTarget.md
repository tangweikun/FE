<!-- 2020-10-27 -->

### target 与 currentTarget 的区别

- `target`只会出现在事件流的目标阶段,`currentTarget`可能出现在事件流的任何阶段
- 当事件流处在目标阶段时，二者的指向相同
- 当事件流处于捕获或冒泡阶段时`currentTarget`指向当前事件活动的对象(一般为父级)
