1. ### What is the difference between HTML and React event handling?

   Below are some of the main differences between HTML and React event handling,

   1. In HTML, the event name should be in _lowercase_:

      ```html
      <button onclick="activateLasers()"></button>
      ```

      Whereas in React it follows _camelCase_ convention:

      ```jsx harmony
      <button onClick={activateLasers}>
      ```

   2. In HTML, you can return `false` to prevent default behavior:

      ```html
      <a
        href="#"
        onclick='console.log("The link was clicked."); return false;'
      />
      ```

      Whereas in React you must call `preventDefault()` explicitly:

      ```javascript
      function handleClick(event) {
        event.preventDefault();
        console.log('The link was clicked.');
      }
      ```

   3. In HTML, you need to invoke the function by appending `()`
      Whereas in react you should not append `()` with the function name. (refer "activateLasers" function in the first point for example)

2. ### How to bind methods or event handlers in JSX callbacks?

   There are 3 possible ways to achieve this:

   1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

      ```javascript
      class Component extends React.Component {
        constructor(props) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
          // ...
        }
      }
      ```

   2. **Public class fields syntax:** If you don't like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks.

      ```jsx harmony
      handleClick = () => {
        console.log('this is:', this);
      };
      ```

      ```jsx harmony
      <button onClick={this.handleClick}>{'Click me'}</button>
      ```

   3. **Arrow functions in callbacks:** You can use _arrow functions_ directly in the callbacks.

      ```jsx harmony
      <button onClick={(event) => this.handleClick(event)}>{'Click me'}</button>
      ```

   **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

3. ### What is React Fiber?

   Fiber is the new _reconciliation_ engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

4. ### What is the main goal of React Fiber?

   The goal of _React Fiber_ is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

5. ### What is the purpose of using super constructor with props argument?

   A child class constructor cannot make use of `this` reference until `super()` method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to `super()` call is to access `this.props` in your child constructors.

   **Passing props:**

   ```javascript
   class MyComponent extends React.Component {
     constructor(props) {
       super(props);

       console.log(this.props); // prints { name: 'John', age: 42 }
     }
   }
   ```

   **Not passing props:**

   ```javascript
   class MyComponent extends React.Component {
     constructor(props) {
       super();

       console.log(this.props); // prints undefined

       // but props parameter is still available
       console.log(props); // prints { name: 'John', age: 42 }
     }

     render() {
       // no difference outside constructor
       console.log(this.props); // prints { name: 'John', age: 42 }
     }
   }
   ```

   The above code snippets reveals that `this.props` is different only within the constructor. It would be the same outside the constructor.

6. ### How to use innerHTML in React?

   The `dangerouslySetInnerHTML` attribute is React's replacement for using `innerHTML` in the browser DOM. Just like `innerHTML`, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a `__html` object as key and HTML text as value.

   In this example MyComponent uses `dangerouslySetInnerHTML` attribute for setting HTML markup:

   ```jsx harmony
   function createMarkup() {
     return { __html: 'First &middot; Second' };
   }

   function MyComponent() {
     return <div dangerouslySetInnerHTML={createMarkup()} />;
   }
   ```

7. ### What is the purpose of `getDerivedStateFromProps()` lifecycle method?

   The new static `getDerivedStateFromProps()` lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or `null` to indicate that the new props do not require any state updates.

   ```javascript
   class MyComponent extends React.Component {
     static getDerivedStateFromProps(props, state) {
       // ...
     }
   }
   ```

   This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillReceiveProps()`.

8. ### What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?

   The new `getSnapshotBeforeUpdate()` lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to `componentDidUpdate()`.

   ```javascript
   class MyComponent extends React.Component {
     getSnapshotBeforeUpdate(prevProps, prevState) {
       // ...
     }
   }
   ```

   This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillUpdate()`.

9. ### Why is `isMounted()` an anti-pattern and what is the proper solution?

   The primary use case for `isMounted()` is to avoid calling `setState()` after a component has been unmounted, because it will emit a warning.

   ```javascript
   if (this.isMounted()) {
     this.setState({...})
   }
   ```

   Checking `isMounted()` before calling `setState()` does eliminate the warning, but it also defeats the purpose of the warning. Using `isMounted()` is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.

   An optimal solution would be to find places where `setState()` might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in `componentWillUnmount()`, prior to unmounting.

10. ### How to re-render the view when the browser is resized?

    You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

    ```javascript
    class WindowDimensions extends React.Component {
      constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
      }

      componentWillMount() {
        this.updateDimensions();
      }

      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

      updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      render() {
        return (
          <span>
            {this.state.width} x {this.state.height}
          </span>
        );
      }
    }
    ```

11. ### Why is a component constructor called only once?

    React's _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.

12. ### What is the purpose of registerServiceWorker in React?

    React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now. It's all about adding offline capabilities to your site.

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import registerServiceWorker from './registerServiceWorker';

    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
    ```

13. ### In which scenarios error boundaries do not catch errors?

    Below are the cases in which error boundaries doesn't work,

    1. Inside Event handlers
    2. Asynchronous code using **setTimeout or requestAnimationFrame** callbacks
    3. During Server side rendering
    4. When errors thrown in the error boundary code itself

14. ### What is the main purpose of constructor?

    The constructor is mainly used for two purposes,

    1. To initialize local state by assigning object to this.state
    2. For binding event handler methods to the instance
       For example, the below code covers both the above cases,

    ```javascript
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    ```

15. ### What is the difference between Real DOM and Virtual DOM?

    Below are the main differences between Real DOM and Virtual DOM,

    | Real DOM                             | Virtual DOM                          |
    | ------------------------------------ | ------------------------------------ |
    | Updates are slow                     | Updates are fast                     |
    | DOM manipulation is very expensive.  | DOM manipulation is very easy        |
    | You can update HTML directly.        | You Can’t directly update HTML       |
    | It causes too much of memory wastage | There is no memory wastage           |
    | Creates a new DOM if element updates | It updates the JSX if element update |

16. ### hoc、render props、react-hooks 的优劣如何？

    #### HOC 的缺陷:

    扩展性限制: HOC 无法从外部访问子组件的 State 因此无法通过 shouldComponentUpdate 滤掉不必要的更新,React 在支持 ES6 Class 之后提供了 React.PureComponent 来解决这个问题

    Ref 传递问题: Ref 被隔断,后来的 React.forwardRef 来解决这个问题

    Wrapper Hell: HOC 可能出现多层包裹组件的情况,多层抽象同样增加了复杂度和理解成本

    命名冲突: 如果高阶组件多次嵌套,没有使用命名空间的话会产生冲突,然后覆盖老属性

    不可见性: HOC 相当于在原有组件外层再包装一个组件,你压根不知道外层的包装是啥,对于你是黑盒

    #### Render Props 优点:

    上述 HOC 的缺点 Render Props 都可以解决

    #### Render Props 缺陷:

    使用繁琐: HOC 使用只需要借助装饰器语法通常一行代码就可以进行复用,Render Props 无法做到如此简单

    嵌套过深: Render Props 虽然摆脱了组件多层嵌套的问题,但是转化为了函数回调的嵌套

    #### React Hooks 优点:

    简洁: React Hooks 解决了 HOC 和 Render Props 的嵌套问题,更加简洁

    解耦: React Hooks 可以更方便地把 UI 和状态分离,做到更彻底的解耦

    组合: Hooks 中可以引用另外的 Hooks 形成新的 Hooks,组合变化万千

    函数友好: React Hooks 为函数组件而生,从而解决了类组件的几大问题:
    this 指向容易错误
    分割在不同声明周期中的逻辑使得代码难以理解和维护
    代码复用成本高（高阶组件容易使代码量剧增）

    #### React Hooks 缺陷:

    额外的学习成本（Functional Component 与 Class Component 之间的困惑）

    写法上有限制（不能出现在条件、循环中），并且写法限制增加了重构成本

    破坏了 PureComponent、React.memo 浅比较的性能优化效果（为了取最新的 props 和 state，每次 render()都要重新创建事件处函数）

    在闭包场景可能会引用到旧的 state、props 值

    内部实现上不直观（依赖一份可变的全局状态，不再那么“纯”）

    React.memo 并不能完全替代 shouldComponentUpdate（因为拿不到 state change，只针对 props change）

17. ### 你是如何理解 fiber 的?

    React Fiber 是一种基于浏览器的单线程调度算法.
    React 16 之前，`reconcilation`  算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归.
    Fiber：一种将 `recocilation` （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。

18. ### 你对 Time Slice 的理解?

    - React 在渲染（render）的时候，不会阻塞现在的线程
    - 如果你的设备足够快，你会感觉渲染是同步的
    - 如果你设备非常慢，你会感觉还算是灵敏的
    - 虽然是异步渲染，但是你将会看到完整的渲染，而不是一个组件一行行的渲染出来

    时间分片正是基于可随时打断、重启的 Fiber 架构,可打断当前任务,优先处理紧急且重要的任务,保证页面的流畅运行.

19. ### redux 与 mobx 的区别

    #### 两者对比:

    - redux 将数据保存在单一的 store 中，mobx 将数据保存在分散的多个 store 中
    - redux 使用 plain object 保存数据，需要手动处理变化后的操作；mobx 适用 observable 保存数据，数据变化后自动处理响应的操作
    - redux 使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数；mobx 中的状态是可变的，可以直接对其进行修改
    - mobx 相对来说比较简单，在其中有很多的抽象，mobx 更多的使用面向对象的编程思维；redux 会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
    - mobx 中有更多的抽象和封装，调试会比较困难，同时结果也难以预测；而 redux 提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易

    #### 场景辨析:

    - mobx 更适合数据不复杂的应用: mobx 难以调试,很多状态无法回溯,面对复杂度高的应用时,往往力不从心.
    - redux 适合有回溯需求的应用: 比如一个画板应用、一个表格应用，很多时候需要撤销、重做等操作，由于 redux 不可变的特性，天然支持这些操作.
    - mobx 适合短平快的项目: mobx 上手简单,样板代码少,可以很大程度上提高开发效率.
    - 当然 mobx 和 redux 也并不一定是非此即彼的关系,你也可以在项目中用 redux 作为全局状态管理,用 mobx 作为组件局部状态管理器来用.

20. ### redux 异步中间件之间的优劣

    #### redux-thunk 优点:

    - 体积小: redux-thunk 的实现方式很简单,只有不到 20 行代码
    - 使用简单: redux-thunk 没有引入像 redux-saga 或者 redux-observable 额外的范式,上手简单

    #### redux-thunk 缺陷:

    - 样板代码过多: 与 redux 本身一样,通常一个请求需要大量的代码,而且很多都是重复性质的
    - 耦合严重: 异步操作与 redux 的 action 偶合在一起,不方便管理
    - 功能孱弱: 有一些实际开发中常用的功能需要自己进行封装

    #### redux-saga 优点:

    - 异步解耦: 异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中
      action 摆脱 thunk function: dispatch 的参数依然是一个纯粹的 action (FSA)，而不是充满 “黑魔法” thunk function
    - 异常处理: 受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理
    - 功能强大: redux-saga 提供了大量的 Saga 辅助函数和 Effect 创建器供开发者使用,开发者无须封装或者简单封装即可使用
    - 灵活: redux-saga 可以将多个 Saga 可以串行/并行组合起来,形成一个非常实用的异步 flow
    - 易测试，提供了各种 case 的测试方案，包括 mock task，分支覆盖等等

    #### redux-saga 缺陷:

    - 额外的学习成本: redux-saga 不仅在使用难以理解的 generator function,而且有数十个 API,学习成本远超 redux-thunk,最重要的是你的额外学习成本是只服务于这个库的,与 redux-observable 不同,redux-observable 虽然也有额外学习成本但是背后是 rxjs 和一整套思想
    - 体积庞大: 体积略大,代码近 2000 行，min 版 25KB 左右
    - 功能过剩: 实际上并发控制等功能很难用到,但是我们依然需要引入这些代码
    - ts 支持不友好: yield 无法返回 TS 类型

    #### redux-observable 优点:

    - 功能最强: 由于背靠 rxjs 这个强大的响应式编程的库,借助 rxjs 的操作符,你可以几乎做任何你能想到的异步处理
    - 背靠 rxjs: 由于有 rxjs 的加持,如果你已经学习了 rxjs,redux-observable 的学习成本并不高,而且随着 rxjs 的升级 redux-observable 也会变得更强大

    #### redux-observable 缺陷:

    - 学习成本奇高: 如果你不会 rxjs,则需要额外学习两个复杂的库
    - 社区一般: redux-observable 的下载量只有 redux-saga 的 1/5,社区也不够活跃,在复杂异步流中间件这个层面 redux-saga 仍处于领导地位
