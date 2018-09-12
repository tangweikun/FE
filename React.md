# React

## Table of Contents

1.  [How does React prevent injection attacks?](#how-does-react-prevent-injection-attacks?)

1.  [What is the React context?](#What-is-the-react-context?)

1.  [What is ReactDOM?](#what-is-reactdom?)

1.  [What are refs in React and what are they used for?](#what-are-refs-in-react-and-what-are-they-used-for?)

1.  [What would be a good lifecycle method to make a remote call to fetch data for a component?](#what-would-be-a-good-lifecycle-method-to-make-a-remote-call-to-fetch-data-for-a-component)

1.  [What are some limitations of things you shouldn't do in the component's render method?](#what-are-some-limitations-of-things-you-shouldn't-do-in-the-component's-render-method?)

1.  [Why would you need to bind event handlers to this?](#why-would-you-need-to-bind-event-handlers-to-this?)

1.  [How would you prevent a component from rendering in React?](#how-would-you-prevent-a-component-from-rendering-in-React?)

1.  [What is the point of using keys in React?](#what-is-the-point-of-using-keys-in-react?)

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
