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
