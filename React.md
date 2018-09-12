# React

## Table of Contents

1.  [What would be a good lifecycle method to make a remote call to fetch data for a component?](#what-would-be-a-good-lifecycle-method-to-make-a-remote-call-to-fetch-data-for-a-component)

1.  [What are some limitations of things you shouldn't do in the component's render method?](#what-are-some-limitations-of-things-you-shouldn't-do-in-the-component's-render-method?)

1.  [Why would you need to bind event handlers to this?](#why-would-you-need-to-bind-event-handlers-to-this?)

1.  [How would you prevent a component from rendering in React?](#how-would-you-prevent-a-component-from-rendering-in-React?)

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

> Return null from the render method.

</details>

<br>[⬆ Back to top](#)
