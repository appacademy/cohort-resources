- Routes Demo

    Import { Route } at top of app.jsx

    Show them the four components that are being rendered to the page.

    Now put the `Home`, `TodoFormContainer`, `TodoIndexContainer` into Routes and show that we can now navigate to them using the URL.

    ```jsx
    <Route path="/" component={Home} />
    <Route path="/todos/new" component={TodoFormContainer} />
    <Route path="/todos" component={TodoIndexContainer} />
    ```
    When we navigate to `/todos/new`, we see all 3 components.
    When we navigate to `/todos`, we see the <Home> AND <TodoIndexContainer>

    Notice that no matter which path we go to, the '/' path is always matched and the <Home/> component is always shown. 
    Why is that?

    Explain that we don't want to see all of them at the same time. We could use exact to solve the problem.

    ```jsx
    <Route exact path="/" component={Home} />
    <Route path="/todos/new" component={TodoFormContainer} />
    <Route exact path="/todos" component={TodoIndexContainer} />
    ```

    Recap: We created routes for our <Home>, <TodoFormContainer>, and <TodoIndexContainer> components in the render of our <App>. Because <Route> renders everything that matches, we added exact flag to our two of our routes to prevent them from all rendering at the same time.

- Switch Demo!!

    Explain how using exact is great, but there is another component that we can use to be more semantic about this. We only ever want _one_ of these three components to render at the same time. So instead of making sure that we have exact, non-conflicting paths, we can use a `Switch`.  

    It can be overly complicated to use exact, especially when you know you just want to render one route.

    Import Switch and refactor to include the switch and remove the exacts:

    ```jsx
    <Switch>
        <Route path="/" component={Home} />
        <Route path="/todos/new" component={TodoFormContainer} />
        <Route path="/todos" component={TodoIndexContainer} />
    </Switch>
    ```

    Let's navigate to `/`, `/todos/new`, and `/todos`. Hm...it looks like no matter which route, our <Home> component is the only one that shows. Any guesses as to why that is?

    Show them that the ordering matters. Mention that you will want to order your Routes in a switch from most specific to least.

    ```jsx
    <Switch>
      <Route path="/todos/new" component={TodoFormContainer} />
      <Route path="/todos" component={TodoListContainer} />
      <Route path="/" component={Home} />
    </Switch>
    ```

    Recap: Instead of using the exact flags in our routes, we wrapped our routes in a <Switch> so that our components render exclusively as soon as a match is found. Because ordering in a <Switch> matters, we put the most specific to least specific

- Link Demo

    Notice how we've been manually entering the paths into the URL bar. Now we need a way to navigate to these URLs. Enter the `Link` component.

    Add some links to the `Header` component, using some css we prepared earlier. Make sure to import <Link /> at the top of your file.

    ```jsx
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <Link className="button" to="/">Home</Link>
      <Link className="button" to="/todos">Todos</Link>
      <Link className="button" to="/todos/new">New Todo</Link>
    </header>
    ```

    The styling is done for you, just include the className.

    Recap: In our <Header> component, we added links to to each of our routes.

- Nav Link

    There is another component that gives us a little more functionality than the link. This is the `NavLink`. It applies the activeClassName when the `to` link matches the current url. Let's use that!

    ```jsx
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <NavLink activeClassName="curr" className="button" to="/">Home</NavLink>
      <NavLink activeClassName="curr" className="button" to="/todos">Todos</NavLink>
      <NavLink activeClassName="curr" className="button" to="/todos/new">New Todo</NavLink>
    </header>
    ```

    Styling is done for you.

    Let's take a look at the html elements when a path is active, we will see an <a></a> tag with the class button added.

    Side Note: aria-current is an attribute defined in the WAI-ARIA specification. This specification extends native HTML, allowing you to change the way an HTML element is "translated" into the accessibility tree. For accessibility code readers. This shows up in the active link html.

    Notice that `/` is matching to all of our routes! Add an `exact` key to all of the `NavLink`s. Just adding exact or exact={true} is the same.

    ```jsx
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <NavLink exact={true} activeClassName="curr" className="button" to="/">Home</NavLink>
      <NavLink exact={true} activeClassName="curr" className="button" to="/todos">Todos</NavLink>
      <NavLink exact={true} activeClassName="curr" className="button" to="/todos/new">New Todo</NavLink>
    </header>
    ```

    Now we can render components conditionally and we have links to navigate
    between them. Let's take a look at some more tools that Route gives us to
    use.

    Recap: Because we wanted additional syling on links that are active, we refactored to use <NavLink> instead. This allows us to conditionally add styling to our links only when the link is active, meaning we are currently at that path. 

- match.params Demo

    So we have a `<TodoShowContainer/>`. Let's define a route that will render this:
    
    We will need to build a route that takes a wildcard, because we want to be able to dynamically pass in an :id for the correct todo show page that we want.

    Let's add a route for our TodoShowContainer in app.jsx - 

    ```jsx
    <Route path="/todos/:id" component={TodoShowContainer} /> 
    ```

    Given our switch needs to be ordered from most specific to least specific, where should we place this route in our Switch?

    + if we put `/todos/:id` before `/todos/new` our code would break when we try to go to `/todos/new` because anything after `/todos/` will be considered a wildcard including "new"
    + Therefore, we need to put this wildcard path after our `/todos/new` route

    Refresh and show the show page working if we navigate to `/todos/8`.

    Let's look at how the :id is getting passed down to the TodoShowContainer in ownProps - 
    + our path is now `/todos/8` when we hit the `<TodoShowContainer/>` we have access to what the id is in our url.
    + we can access that id using the route props that's available to us because our TodoShowContainer is wrapped in a Route.
    + as mentioned before, we can access those route props through ownProps when we're mapping state to props. Let's take a look...

    If we put a `console.log(ownProps)` in MSP we will see that props has history, location, and map. Let's look at this object in the console. Notice `match.params` has the wildcard :id in it.

    Now, let's see how can utilize ownProps. Once common pattern we'll see a lot is in our MSP, we want to grab a specific todo (one that matches our :id wildcard) from our state, so we can pass this todo down to the todo show component.

    To do that, we utilize ownProps, which gives us access to the match objects which has our id wildcard stored. We will grab the id from `ownProps.match.params.id`

    ```js
    const mapStateToProps = (state, ownProps) => {
      return({
        todo: state.todos[ownProps.match.params.id]
      });
    };
    ```

    Applying this same pattern to ur MDP, we can dispatch a fetchTodo action that takes an id.

    ```js
    const mapDispatchToProps = (dispatch, ownProps) => {
      return({
        fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
        destroyTodo: (todo) => dispatch(deleteTodo(todo))
      });
    };
    ```

    So we can see that when `TodoShow` receives the MSP and MDP props, it has the right todo to render and the fetchTodo() action is linked to an id already.

    Recap: We utilized ownProps in our todo show container to access route props that are passed down. ownProps are just all the props the container has access to. In ownProps of MSP, we pulled out `match.params.id` so that we can access state.todos at the correct id. We also have access to ownProps in MDP, so we applied same technique to pull out the id to pass it to our `fetchTodo` thunk action creator which takes an id as argument.

- withRouter Demo:

    Serves two independent purposes. Don't mention the updating problem, it will be over their head for now. Let them encounter it in full stack.

    Say we want to create a better user experience. We want them to be able to click on an individual todo on the /todos index page and have it take them to the corresponding show page.
    + Let's add a showDetail event handler in our TodoIndexItem. This is a common pattern we can use to trigger navigation in an onclick event handler.
        ```jsx
            showDetail(e) {
                // debugger;
                e.preventDefault();
                this.props.history.push(`/todos/${this.props.todo.id}`);
            }
        ```
    + In this method, we want to use the push method on the history prop. The history object has a push method that will push the route you pass in to the top of the history stack which makes that the current page.
    + This creates the effect  of taking us to the todo index item's show page.
    + However, history is only available on a route wrapped component.

    Notice that we can't do that because our TodoIndexItem isn't wrapped in a route or connected to one that is. Therefore, we don't have access to this.

    Let's try to run this and see the error.

    This is where withRouter comes in handy.

    Let's wrap our TodoIndexItem in withRouter and now we are able to push to correct show page. Make sure the function is bound! We can also console log our props to see what we now have these route props.

- Redirect Demo

    Let's talk about the Redirect component
    + this is not the same as the redirect we used in Rails. It is not
        making a request, just changing the URL.

    Add these two to the `Switch` after "/" route and make '/' an exact path. Make sure to import { Redirect }

    ```jsx
    <Route path="/error" component={Error} />
    <Redirect to="/error" />
    ```

    Talk about how it will be hit and then eventually render the `Error` component. 

    Here, if we navigate to a path that doesn't exist, it will look through the defined routes, then hit the <Redirect> which sends us to `/error` route.

- Recap: Wrapping our components in withRouter can give us access to route props even if our component isn't directly rendered by <Route>. Using <Redirect> allows us to force navigation to a specified path.