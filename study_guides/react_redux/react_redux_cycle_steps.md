# react/redux summary
1. DOMContentloaded
2. create Store
    * store has a root reducer 
    * root reducer has the state shape of entire application
    * below is an example of an applications  ```main state```

```javascript
entities:{
    items: {},
    pokemon: {}
}
ui:{
    errors: {}
}
```
3. ReactDom.render renders the Root component with the store passed in as a prop.  in the root component we wrap and arbitrary app component with the provider.  The Provider provides the state to the containers that export default the connect function, with msp and mdp as arguments.  the return value of connect returns a function that takes a component as an argument. 

4. When we go to a certain path the ``` Route```will render a container if it matches the path.
    * container will have a connect function which invokes the map state to props and map dispatch to props.
    * the connect function makes sure to pass the state to the first argument and the dispatch to the second one.
    * msp maps the wanted state from the applications ```main state``` to the props in the component
    * mdp pretty much maps ajax requests to the props in the component.
    * the route will also pass props to the components they render.
5. after invoking msp and mdp we will then render the component.
    * if there is a componentDidMount() then we will hit that after the component has attempted to render. 

# middleware summary
If there is a prop that dispatches an ajax request in the componentDidMount(), we are, essentially, invoking a function that dispatches this ajax request to the middleware. The middleware will then see if the the action is a function or not. If the action is a function, the middleware will invoke that function and then pass the dispatch function as an argument. The dispatch function that was passed along will then be used after we get our data response from the ajax request. Remember that the dispatch sends an action to the middleware and then invokes the next argument which then ships the action to the next middleware. If there is no other middleware then we will send the action to all of the reducers, through the root reducer.
