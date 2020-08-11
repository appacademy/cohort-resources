# W11D2
​
## React Router
​
---
​
### Learning Objectives
​
+ Why we use React Router
+ Learn how to use React Router to render different components
+ Learn that frontend routes !== backend routes
​
---
​
### Single Page Applications
​
+ React is popular for single page applications (SPAs) because only required or updated components are rendered.
​
+ Oftentimes in SPAs, the HTML is only served up once from the server unlike multiple page applications (MPAs).
	+ There is no page reload when content on the page changes. 
​
---
​
### Frontend Routes !== Backend Routes
​
+ Using React, we will only make one request at the beginning of the session - or upon refresh - to the server to get actual HTML
​
  + Which route is that?
​
---
​
### Answer:
​
+ With React, the only backend route that will actually serve up HTML
from now on is the root route: `/`
​
```ruby
Rails.application.routes.draw do
  root to: 'static_pages#root'
end
```
​
+ We will still use other backend routes from Rails in our app for API
calls to get data from our databse, but not to get HTML.
​
---
​
### The Illusion of Navigation
​
+ On the frontend, React is able to render different components but the url will always be the root path '/'
​
+ We still want to mimic the behavior of navigating a multi-page site,
by changing the URL when content changes
​
  + Why do we want to do this?
​
---
​
### React Router Basics
​
+ React Router is the defacto routing library for React
​
+ Three primary components in React Router:
	+ router <HashRouter>
  + route matchers <Route> and <Switch>
  + navigation <Link>, <NavLink>, <Redirect>
​
+ All imported from `react-router-dom`
​
---
​
## Getting started
​
+ NPM install react-router
+ NPM install react-router-dom
​
+ <HashRouter> Example: "www.mywebsite.com/#/person/john"
  - server will get "www.mywebsite.com/"
  - react router will read "/person/john"
​
```jsx
// Other imports omitted for brevity
import { HashRouter } from 'react-router-dom'
​
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
​
```
​
---
​
### <Route>
```jsx
import { Route } from 'react-router-dom';
//define routes inside of render or return
  <Route path="/" component={Home} />
  <Route path="/todos" component={TodoIndexContainer} />
  <Route path="/todos/new" component={TodoFormContainer} />
```
​
+ Used to determine which components to render at which routes
  
+ A Route component ALWAYS renders to the virtual DOM
  + But when the path does not match, it will render `null`
  
+ Should always start with `/`
​
---
​
### Props a <Route> Accepts
​
+ `path`: the path to match against
+ `component`: takes a React component
+ `render`: takes an inline function
+ `exact`: ensures the path is an exact match
  + If any path is matched completely - regardless of additional characters in the URL, the component will render
​
​
```jsx
<Route path="/todos" component={TodoIndexContainer} />
<Route exact path="/" component={Home} />
<Route exact path="/" render={() => <h1>Home</h1>} />
```
Let's add some routes to our website!
​
---
​
### <Switch>
​
+ Renders only the first matching route
  
+ Beware of ordering!
  
+ Good to have a catch-all ('/') route as the last nested route
​
```html
<Switch>
  <Route path="/todos/new" component={TodoFormContainer}/>
  <Route path="/todos" component={TodoIndexContainer}/>
  <Route path="/" component={Home}/>
</Switch>
```
​
---
​
### 10 Min Break
​
---
​
### Getting Started/Routes Demo/Switch Demo
​
---
​
### <Link>
​
+ `to` property takes in a string representing the path to link to
  
+ Generates an anchor tag in your HTML document to a specific route
​
```jsx
<Link to="/todos">All Todos</Link>
​
// <a href="/todos">All Todos</a> renders to your HTML
```
​
---
​
### <NavLink>
​
+ Built on top of <Link>
+ Adds `active` styling on the current link
​
```jsx
<NavLink
  exact={true}
  to="/users"
  activeClassName="selected"
  activeStyle={{ fontWeight: 'bold' }}
>Users</NavLink>
```
​
---
​
### Link/NavLink Demo
​
---
​
### 10 Min Break
​
---
  
### Props a <Route> Passes
​
+ `match` 
  + Represents how a route matched the current url. Includes the following properties: `params`, `isExact`, `path`, `url`
  + Accessed in Route component as _this.props.match_.
+ `location`
  + Immutable JavaScript object that represents url's current state
  + Accesssed in Route component as _this.props.location_.
+ `history`
  + Keeps track of our hash routes and allows us to change it
  + Includes methods such as: `push`, `replace`
  
---
​
### ownProps
​
+ In redux, containers are themselves components, so they receive props from parent components
 + We refer to them as `ownProps`
  
+ Their props are passed as an argument to mapStateToProps and mapDispatchToProps
  
+ `ownProps` will *also* be passed down to the connected component
​
Let's look at an example.
​
---
​
### match.params
​
+ use match.params to access `:id` wildcards in our url
​
```js
// TodoShowContainer /todos/2
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.id]
});
​
```
​
1. Let's add a route for our `TodoShowContainer`
2. Let's look at how the `:id` is getting passed down to the `TodoShowContainer` in ownProps
​
---
​
### ownProps/match.params Demo
​
---
​
### withRouter
​
+ *function* available from react router
​
+ Provides Router props (match, location, history) to components NOT rendered by a Route
  
+ Use withRouter _around_ `connect`
​
```js
withRouter(connect(mapSTP, mapDTP)(MyComponent));
```
​
---
​
### <Redirect>
​
+ `to` property takes a string or object to redirect route to
  
+ `from` property can only be used within a Switch statement to redirect from one route to another
​
```html
<Switch>
  <Route path='/error' component={Error} />
  <Route path='/' component={Home} />
  <Redirect to='/error' />
</Switch>
```
​
---
​
### `withRouter`/Redirect Demo
​
---
​
[Kahoot](https://play.kahoot.it/#/?quizId=d99216d2-a869-4501-9bbc-21b2b08f5b36)
​
Note:
1) Triangle
2) Circle - Given we aren't using exact, both the "/" and "/profile" routes will match
3) Triangle - By using exact on the "/" route, now only "/profile" matches
4) Diamond - Switch means the first matching route will render. Since the least specific route was listed first, it will always render
5) Square - Route components pass down match.params as props
​
---
​
### Thank you!
