# W13D5 React/Redux Review

---

## Agenda
- Application State vs. Component State and Props
    - The Publish-Subscribe pattern
- Review mapStateToProps, mapDispatchToProps and connect
- Demo full react redux cycle including backend and jbuilder
  - json.jbuilder as our "view"/promise result

---

## Application State
- Holds all the information (data) we need on the frontend to properly render a page.
- All the data in our application state comes from the database:
    - controllers render 'views' in the form of json.jbuilder files
    - json.jbuilder files return POJOs
    - when rendered these POJOs get sent to the frontend as an AJAX Promise result
- These results get dispatched as action objects and added to our application state via reducers

---

## Application State Example
```js
{ 
    entities: {
        users: {
            1: {
                id: 1, 
                username: 'Captain Nemo'
                email: 'cool_cat@gmail.com'
            },
            2: {
                id: 2, 
                username: 'Bob'
                email: 'bob_cat@gmail.com'
            }
        },
        naps: {
            1: {
                id: 1,
                duration: 17,
                napperId: 2
            },
            2: {
                id: 2,
                duration: 23,
                napperId: 1
            }
        }
    },
    session: {
        currentUserId: 1
    },
    errors: {
        sessionErrors: []
    }
}
```

---

## Component Props and State
- State refers to information that the component itself manages
  - Internal to a class component. 
  - The component can direcly change and manage state
    - A change to state causes a rerender of the component
- Props refer to information that the component receives from a parent component or passes down to a child component
- Props data can come from our Applicaiton State
  - mapStateToProps and connect
  - props connected to applicaiton state change when the application state changes (any change in props causes a component to rerender).
    - this connection is an expample of the Publish-Subscribe Pattern

---

## The Publish-Subscribe Patter (PubSub)
- A software architecture messaging pattern where a sender of information (the publisher) broadcasts updates that get heard by receivers (the subscribers).
- The publisher does not need to know about the subscribers so there is no need for the publisher to broadcast specifically, a general notice of an update will suffice
- The subscriber is listening for any updates to be broadcast by the publisher and retreives any relavant data changes it plans to use.
- Our publisher is Application State
  - Application state broadcasts changes
- Our subscribers are containers via connect and mapStateToProps
  - connect hears the application state change and reinvokes our mapStateToProps which retreives the relavant data.
    - This updates the props of the connected component and causes a rerender

---

## connect
- `connect` connects applications state to a component's props via `mapStateToProps` and listens for application state to broadcast an update
  - when a broadcast is received `connect` reruns `mapStateToProps`
- `connect` also connets dispatchable thunk/action creators to a component's props via `mapDispatchToProps`
  - this gives the connected component the ability to change application state

---

## mapStateToProps
- `mapStateToProps` maps specific data from application state to the props of a connected component.
  - If appliation state updates `connect` reruns `mapStateToProps` which updates the props of the connected component and causes a rerender

---

## mapDispatchToProps
- `mapDispatchToProps` maps functions (dispatchable thunk/action creators) to connected componets.
  - these functions dispatch actions that ultimately hit our reducers and update state
  - this gives connected components the ability to update our application state
    - EX: user fills out a form --> onSubmit the form data get's dispatched as an action --> reducers update application state based on the action's type --> application state braodcasts the updates --> `connect` reruns `mapStateToProps` --> connected component props update and cause a component rerender. 

---

## Demo with jbuilder in detail

---

## Questions?

---

## Thank you!