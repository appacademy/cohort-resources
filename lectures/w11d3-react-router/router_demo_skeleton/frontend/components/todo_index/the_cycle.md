Behavior: User goes to /todos/30

1.Hash router notified of URL change
2. Hash Router looks at all of the routes and renders the component connected to the path we are at
3. Render TodoShowContainer and give it history, match, location
    ownProps.match.params.id gives us access to the wild card => 30
4. TodoShow going to receive as props: 
   1. todo: => undefined because I do not have anything in my state yet
   2. fetchTodo points to a thunk action creator
   3. destroyTodo points to a thunk action creator
5. TodoShow calls render and return null
6. TodoShow calls componentDidMount and invokes fetchTodo()
7. Makes an AJAX call with fetchTodo
8. Hits controller (todos) and show action where we pull that todo from DB
9. Todo being curated in JBuilder file and returned to thunk action creator (after .then)
10. Dispatching action creator with the todo that goe returned from AJAX call
11. Going to reducer and changing state
12. When state changes, all containers get notified 
13. TodoShowContainer changes the value that todo point at and sends it as a prop to our TodoShow 
14. TodoShow re renders