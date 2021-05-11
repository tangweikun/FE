- 写 react 有哪些细节可以优化
  1、首屏优化一般涉及到几个指标 FP、FCP、FMP；要有一个良好的体验是尽可能的把 FCP 提前，需要做一些工程化的处理，去优化资源的加载。方式及分包策略，资源的减少是最有效的加快首屏打开的方式；
  2、对于 CSR 的应用，FCP 的过程一般是首先加载 js 与 css 资源，js 在本地执行完成，然后加载数据回来，做内容初始化渲染，这中间就有几次的网络反复请求的过程；所以 CSR 可以考虑使用骨架屏及预渲染（部分结构预渲染）、suspence 与 lazy 做懒加载动态组件的方式
  3、配合使用 Service worker，来控制资源的调配及骨架屏秒开的体验
  4、过 React.Profiler 分析组件的渲染次数及耗时的一些任务，但是 Profile 记录的是 commit 阶段的数据，所以对于 react 的调和阶段就需要结合 performance API 一起分析
  5、由于 React 是父级 props 改变之后，所有与 props 不相关子组件在没有添加条件控制的情况之下，也会触发 render 渲染，这是没有必要的，可以结合 React 的 PureComponent 以及 React.memo 等做浅比较处理，这中间有涉及到不可变数据的处理，当然也可以结合使用 ShouldComponentUpdate 做深比较处理
  6、保证整个应用的可用性，为组件创建错误边界，可以使用 componentDidCatch 来处理；
