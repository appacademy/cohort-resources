# W11D3
​
### React Router
​
---
​
## Lecture Objectives
​
+ Understand motivation for using React Router
+ Learn the basic components of React Router
+ Demonstrate how to create frontend routes
​
---
​
## Lecture Outline
​
+ Jbuilder Review
+ React Router Basics
+ Main Components of React Router
+ Props provided by React Router
​
---
​
## Middleware & Jbuilder Review
​
+ [Redux cycle](https://github.com/appacademy/worldwide-lecture-notes/blob/master/react/w11d2-react-router/assets/redux-cycle-review.png) with thunk middleware
+ State shape
+ jbuilder methods:
  + json.set!
  + json.extract!
  + json.array!
  + json.some_key
​
---
​
## Single Page Applications
​
+ React is popular for single page applications (SPAs) because only required or updated components are rendered.
​
+ Oftentimes in SPAs, only one HTML is served up from the server unlike multiple page applications (MPAs).
	+ There is no page reload when content on the page changes. 
​
---
​
## Frontend Routes !== Backend Routes
​
+ Using React, only one request is made at the beginning of the session - or upon refresh - to the server to get HTML
​
+ The root route `/` is the only backend route that serves up HTML
​
+ Other backend routes from Rails serve as API endpoints to get data from the database, but not to get HTML.
​
```ruby
Rails.application.routes.draw do
  root to: 'static_pages#root'
end
```
​
---
​
## The Illusion of Navigation
​
+ React renders different components but the url will always be the root path `/`
​
+ React Router provides a way to create dynamic frontend routes
  + frontend routes mimic the navigation of a multi-page site
  + frontend routes allow us to define UI based on what's in the URL
​
---
​
## React Router Basics
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
+ wrap app in <HashRouter> inside of <Provider>
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
```
​
---
​
## <Route>
​
+ Renders specific components based on URL path
  
+ Renders matched components inclusively
​
+ When a path does not match any routes, `null` will be rendered
  
```jsx
import { Route } from 'react-router-dom';
//define routes inside of render or return
  <Route path="/" component={Home} />
  <Route path="/todos" component={TodoIndexContainer} />
  <Route path="/todos/new" component={TodoFormContainer} />
```
​
---
​
## Props a <Route> Accepts
​
+ `path`: the path to match against
  + If any path is matched completely - regardless of additional characters in the URL, the component will render
+ `exact`: ensures the path is an exact match
+ `component`: takes a React component
+ `render`: takes an inline function
​
```jsx
<Route path="/todos" component={TodoIndexContainer} />
<Route exact path="/" component={Home} />
<Route exact path="/" render={() => <h1>Home</h1>} />
```
​
---
​
## <Switch>
​
+ Renders only the first matching route
  
+ Beware of ordering!
  
+ Good to have a catch-all ('/') route as the last nested route
​
```jsx
<Switch>
  <Route path="/todos/new" component={TodoFormContainer}/>
  <Route path="/todos" component={TodoIndexContainer}/>
  <Route path="/" component={Home}/>
</Switch>
```
​
---
​
## 10 Min Break
​
---
​
## Getting Started/Routes Demo/Switch Demo
​
---
​
## <Link>
​
+ Generates an anchor tag in your HTML document to a specific route
​
+ `to` property takes in a string representing the path to link to
  
```jsx
<Link to="/todos">All Todos</Link>
​
// <a href="/todos">All Todos</a> renders to your HTML
```
​
---
​
## <NavLink>
​
+ Built on top of <Link> with additional props for styling
  
+ Styling attributes are added to an active <NavLink> element when current URL matches `to` prop
​
---
​
## <NavLink> Props
​
+ `to`: property takes in a string representing the path to link to
+ `exact`: ensures the path is an exact match
  + Example - `/users/123` will not match to=`/users` with the exact flag
+ `activeClassName`: class name for an active <NavLink> element
  + `.active` is default class provided
+ `activeStyle`: inline styling to apply to an active <NavLink> element
​
```jsx
<NavLink
  exact
  to="/users"
  activeClassName="selected"
  activeStyle={{ fontWeight: 'bold' }}
>Users</NavLink>
```
​
---
​
## Link/NavLink Demo
​
---
​
## 10 Min Break
​
---
  
## Props a <Route> Passes
​
+ `match` - an object with the following properties: `params`, `isExact`, `path`, `url`
​
+ `location` - immutable object that represents url's current state
​
+ `history` - mutable object that keeps track of our hash routes
  + Includes methods such as: `push`, `replace`
​
+ Route props are accessible via ownProps
​
---
​
## ownProps Review
​
+ In Redux, containers are themselves components, so they receive props from parent components
 + These props are referred to as `ownProps`
  
+ Their props are passed as an argument to `mapStateToProps` and `mapDispatchToProps`
  
+ `ownProps` will *also* be passed down to the connected component
​
---
​
## match.params
​
+ ownProps can be used to access route props in our Redux containers
​
+ Example - In `mapStateToProps`, use `match.params` to access wildcards (i.e. `:id` ) in our url
​
```js
// TodoShowContainer 
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.id]
});
​
```
​
---
​
## ownProps/match.params Demo
​
---
​
## withRouter
​
+ *function* available from React Router
​
+ Provides Router props (match, location, history) to components NOT rendered by a <Route>
  
+ Use withRouter _around_ `connect`
​
```js
withRouter(connect(mapSTP, mapDTP)(MyComponent));
```
​
---
​
## <Redirect>
​
+ `to` property takes a string or object to redirect route to
  
+ `from` property can only be used within a Switch statement to redirect from one route to another
​
```jsx
<Switch>
  <Route path='/error' component={Error} />
  <Route path='/' component={Home} />
  <Redirect to='/error' />
</Switch>
```
​
---
​
## `withRouter`/Redirect Demo
​
---
​
[Kahoot](https://play.kahoot.it/#/?quizId=d99216d2-a869-4501-9bbc-21b2b08f5b36)
​
---
​
# Thank you!