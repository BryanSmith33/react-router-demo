# React Router DOM
For routing our React applications, we use `react-router-dom`. We will specifically be using `HashRouter`.

## HashRouter
```jsx
import React from 'react'
import {HashRouter} from 'react-router-dom'
```

HashRouter uses the hash portion of a URL to keep track of your application. Go ahead and try opening your developer console and typing out `window.location` and you will see that you have a wide range of options available to you. One of them is `hash`. 

We use `HashRouter` because it is simpler to set up with our servers and when we go to host our applications.

## Switch
`Switch` is a component that works just like a switch case statement in JavaScript. It will look at where our application is being routed to, find a matching `path` and display our desired component. We use `Route` inside of our `Switch`

## Route
`Route` will need at minimum one prop but most of the time two: `path` and `comopnent`. `Route` works with the `Switch` component to determine which component to display. It looks at the path in the URL and compares that to the supplied `path` route. When it finds a match, it will display that component. Remember, all of your `path`s should start with something like `/placeToRoute` and when the `Switch` finds a `/`, it will match that and return. That is why we pass in the `exact` prop to our `Route` that has a path of only `/`.

## Link
We use `Link` to tell our application where to route to. This has nothing to do with the `Route` component. It purely initiates a change in the URL bar that will then set off our `Switch` to check which path we are routing to and find a `Route` with that path and display the specified component.

## router
When we first started out, we put everything inside of our App.js file. This got pretty big and would be difficult to manage in a larger application. We moved everything out to a `router` file to keep things cleaner. A Router file is purely just something that will export our `Switch` component from `react-router-dom`

```jsx
import React from 'react'
import {Switch, Route} from 'react-router-dom'
// here you would import your components to be used in the Route component

export default (
  <Switch>
    // all our routes go here
    <Route path='' component='' />
  </Switch>
)
```