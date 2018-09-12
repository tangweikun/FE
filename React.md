# React

## Table of Contents

1.  [How to avoid using relative path imports in create-react-app?](#how-to-avoid-using-relative-path-imports-in-create-react-app?)

1.  [How to focus an input element on page load?](#how-to-focus-an-input-element-on-page-load?)

1.  [How to use https instead of http in create-react-app?](#how-to-use-https-instead-of-http-in-create-react-app?)

1.  [What will happen if you use setState in constructor?](#what-will-happen-if-you-use-setstate-in-constructor?)

1.  [Why fragments are better than container divs?](#why-fragments-are-better-than-container-divs?)

1.  [How to use InnerHtml in ReactJS?](#how-to-use-innerhtml-in-reactjs?)

1.  [What are fragments?](#what-are-fragments?)

1.  [Why ReactJS uses className over class attribute?](#why-reactjs-uses-classname-over-class-attribute?)

1.  [What is the difference between ShadowDOM and VirtualDOM?](#what-is-the-difference-between-shadowdom-and-virtualdom?)

1.  [What is the purpose of using super constructor with props argument?](#what-is-the-purpose-of-using-super-constructor-with-props-argument?)

1.  [Which is preferred option with in callback refs and findDOMNode()?](#which-is-preferred-option-with-in-callback-refs-and-finddomnode?)

1.  [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback?)

1.  [What is context?](#what-is-context?)

1.  [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling?)

1.  [Why does React need a root element?](#why-does-react-need-a-root-element?)

1.  [How does React prevent injection attacks?](#how-does-react-prevent-injection-attacks?)

1.  [What is the React context?](#What-is-the-react-context?)

1.  [What is ReactDOM?](#what-is-reactdom?)

1.  [What are refs in React and what are they used for?](#what-are-refs-in-react-and-what-are-they-used-for?)

1.  [What would be a good lifecycle method to make a remote call to fetch data for a component?](#what-would-be-a-good-lifecycle-method-to-make-a-remote-call-to-fetch-data-for-a-component)

1.  [What are some limitations of things you shouldn't do in the component's render method?](#what-are-some-limitations-of-things-you-shouldn't-do-in-the-component's-render-method?)

1.  [Why would you need to bind event handlers to this?](#why-would-you-need-to-bind-event-handlers-to-this?)

1.  [How would you prevent a component from rendering in React?](#how-would-you-prevent-a-component-from-rendering-in-React?)

1.  [What is the point of using keys in React?](#what-is-the-point-of-using-keys-in-react?)

### How to avoid using relative path imports in create-react-app?

<details>
<summary>View answer</summary>

> Create a file called .env in the project root and write the import path

```bash
NODE_PATH = src/app
```

> After that restart the development server. Now you should be able to import anything inside \*src/app without relative paths.

</details>

### How to use https instead of http in create-react-app?

<details>
<summary>View answer</summary>

> You just need to use HTTPS=true configuration. You can edit your package.json scripts section as below

```json
"scripts": {
        "start": "set HTTPS=true&&react-scripts start",
      }
```

</details>

### How to focus an input element on page load?

<details>
<summary>View answer</summary>

> Define ref callback for input,Apply input focus in componentDidMount

```js
class App extends React.Component {
  componentDidMount() {
    this.nameInput.focus()
  }
  render() {
    return (
      <div>
        <input defaultValue="Won't focus" />
        <input
          ref={input => {
            this.nameInput = input
          }}
          defaultValue="will focus"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

</details>

### What will happen if you use setState in constructor?

<details>
<summary>View answer</summary>

> When you use setState(), then apart from assigning to the object state react also re-renders the component and all it's children. You would get error like this:Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor.

</details>

### How to use InnerHtml in ReactJS?

<details>
<summary>View answer</summary>

> The attribute named "dangerouslySetInnerHTML" is React’s replacement for using innerHTML in the browser DOM. Just like InnerHtml, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass object \_\_html as key and html text as the value. For example, MyComponent uses this attribute for setting html markup using the code as below

```js
function createMarkup() {
  return { __html: 'First &middot; Second' }
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />
}
```

</details>

### Why fragments are better than container divs?

<details>
<summary>View answer</summary>

- Fragments bit faster and has less memory usage by without creating an extra DOM node. This only has a real benefit on very large and deep trees.

- Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationship, and adding divs in the middle makes it hard to keep the desired layout.

- The DOM inspector is less cluttered

</details>

### What are fragments?

<details>
<summary>View answer</summary>

> It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  )
}
```

</details>

### Why ReactJS uses className over class attribute?

<details>
<summary>View answer</summary>

> class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.

</details>

### What is the purpose of using super constructor with props argument?

<details>
<summary>View answer</summary>

> A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

</details>

### What is the difference between ShadowDOM and VirtualDOM?

<details>
<summary>View answer</summary>

> The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

</details>

### Which is preferred option with in callback refs and findDOMNode?

<details>
<summary>View answer</summary>

> It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

```js
// The legacy approach of using findDOMNode

class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}
```

```js
// The recommended approach is

class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView()
  }

  render() {
    return <div ref={node => (this.node = node)} />
  }
}
```

</details>

### How to pass a parameter to an event handler or callback?

<details>
<summary>View answer</summary>

- You can use an arrow function to wrap around an event handler and pass parameters

```js
<button onClick={() => this.handleClick(id)} />
```

- This is equivalent to calling .bind as below

```js
<button onClick={this.handleClick.bind(this, id)} />
```

</details>

### What is context?

<details>
<summary>View answer</summary>

> Context is a globally available prop that should only be used on occations when you need something that is going to be everywhere in the applications, perhaps for translating text or something like that.

</details>

### What is the difference between HTML and React event handling?

<details>
<summary>View answer</summary>

1.  In HTML, the event name should be in lowercase.

```js
<button onclick="activateLasers()">
```

1.  Whereas in ReactJS it follows camelCase convention

```js
<button onClick={activateLasers}>
```

1.  In HTML, you can return false to prevent default behavior

```js
<a href="#" onclick="console.log('The link was clicked.'); return false" />
```

1.  Whereas in ReactJS you must call preventDefault explicitly

```js
function handleClick(e) {
  e.preventDefault()
  console.log('The link was clicked.')
}
```

</details>

### Why does React need a root element?

<details>
<summary>View answer</summary>

> Since React is all Javascript it needs an element where it can render out it's own DOM tree

</details>

### How does React prevent injection attacks?

<details>
<summary>View answer</summary>

> React DOM escapes any values embedded in JSX before rendering them to help prevent cross site scripting attacks.

</details>

### What is the React context?

<details>
<summary>View answer</summary>

> It's an experimental API that allows you to pass data down through a tree of components without having to use props.

</details>

### What is ReactDOM?

<details>
<summary>View answer</summary>

> It's a top-level React API to render a React element into the DOM, via the ReactDOM.render method.

</details>

### What are refs in React and what are they used for?

<details>
<summary>View answer</summary>

> Refs are React's "escape hatch" mechanism for a component to reference another component outside of the typical data flow. This could be in order to correctly integrate with third party libraries, change focus on another component in the UI, triggering animations, etc.

</details>

### What would be a good lifecycle method to make a remote call to fetch data for a component?

<details>
<summary>View answer</summary>

> `componentDidMount`

</details>

### What are some limitations of things you shouldn't do in the component's render method?

<details>
<summary>View answer</summary>

> You cannot modify the component's `state` (with `setState`), nor interact with the browser (do that in `componentDidMount`). `render` should be a pure function.

</details>

### Why would you need to bind event handlers to this?

<details>
<summary>View answer</summary>

> You need to do this in order for 'this' to refer to the object instance of the React component class in your callback code, otherwise 'this' will be undefined. An alternative is to use arrow functions in your event handlers and 'this' will be initialized as expected.

</details>

### How would you prevent a component from rendering in React?

<details>
<summary>View answer</summary>

> Return null from the `render` method.

</details>

### How would you prevent a component from rendering in React?

<details>
<summary>View answer</summary>

> It allows for more efficient rendering of lists, so that React can reuse DOM elements without having to destroy + recreate them when lists change (slightly) in the UI.

</details>

<br>[⬆ Back to top](#)
