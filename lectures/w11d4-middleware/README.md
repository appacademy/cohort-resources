## W11D4
# Thunk Middleware

Notes to Lecturer:
- For today, we are going to build on top of the TeaTime demo from the Redux lecture. 
With this demo, we will be wanting to connect our frontend from yesterday to a 
rails backend. 
  - The `demo_start` directory has what the demo should look like at the start of
  today's demo (equivalent to the end state from the Redux lecture).
  - The `demo_solution` directory has what the demo should look like in the end 
  state of this lecture for reference.

- The demo is broken into 4 parts. After each part you will briefly return to
the slides.

---

## Learning Objectives

* Review Redux Cycle
* Remember Rails
* Connect an API backend to React/Redux frontend
* Understand Motivation for Middleware and Thunk

---

## Learning Outline

* Review Redux Cycle
* Long demo!
  * Rails backend API
  * APIUtils - fetch
  * Thunk Action Creators
  * Middleware
* Kahoot!

---

## Recommendations for Today

* Just listen and try to take in _CONCEPTS_ from lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Explain it to a friend!

Note:

* Encourage students to try and comprehend the reason why thunk is useful by the 
end of the lecture. Knowing why will help drive their logical reasoning to help 
them fill in gaps later.
* Recommend that students try and walk each other through the redux cycle with 
thunk in the mix!

---

## React Review

* Components
* Props

Note:

* Components are virtual HTML elements, which we can use as modular parts of a 
dynamic single page app
* These virtual elements ultimately get turned into real DOM elements
* Components also have props, which can be threaded down to child components
* What 3 things will trigger a React component to re-render? (props changed, 
state change, parent re-rendering)

---

## Redux

* Store
  * `getState` (function) -> read
  * `dispatch` (function) -> write
* `Provider` -> context for your whole app
* `useSelector` & `useDispatch` -> React-Redux hooks

Note:
* Redux is a state management system that allows us to maintain a "single source 
of truth" for our app's current data
* Avoids prop threading / drilling by providing the store to all components 
through Provider, and useSelector decides which parts of the global state to be 
subscribed to.

---

## Redux Cycle

[Redux Cycle](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks.png)

Note:
* Today, we are going to learn how to connect our React/Redux frontend to a backend

---

## Redux with Rails

[Redux with Rails](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

### Redux with Rails animated
![Redux Cycle GIF](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_gif.gif)

NOTE: 
- API == Rails

---

## Rails as a JSON API

* Rails will: 
  - house our React app in a frontend folder
  - respond to HTTP requests from the frontend with data from our database 
  in the form of JSON


Note:
- Briefly explain/review what a JSON API is.
  - An API that serves data in the form of JSON instead of HTML views
  - A client(browser) makes an HTTP request to an API
  - The API instantiates a controller to handle the HTTP request and retrieve data
  - Data is retrieved from a database and converted into model instances
  - JBuilder is used to extract information from a model(s) and build a JSON object
  - This json object is then returned as the body of the HTTP response from the API
  back to the client

---

## DEMO: Rails backend setup 
* (Be sure to do a run through the entire demo prior to delivering the lecture)

- For today, we are going to build on top of the TeaTime demo from the Redux lecture.
  - The `demo_start` directory has what the demo should look like at the start of
  today's demo (equivalent to the end state from the Redux lecture).

- With this demo, we will be wanting to connect our React frontend from yesterday 
to a rails backend.

### Step 1: Review the code from yesterday

Go over the code from yesterday's demo:
* don't forget to `npm install`
* Review the file structure: components, reducers, actions, store
* Make sure to go over anything that may have changed from yesterday 
  - (ex: if you refactored useSelector to use a custom selector instead of 
  state directly)

### Step 2: Generate a new Rails app and `teas` migration

Now let's get started on setting up our Rails backend!
- Make sure to do this outside of our React app
- We will move the react app into the rails app 

1. Generate a new Rails app: `rails new TeaTime -G --database=postgresql --api --minimal`.
2. Update your Gemfile with `pry-rails`, `binding_of_caller`, `better_errors` 
and `annotate` under `:development`.
3. Comment out the debug gem and add `gem "byebug"`.
4. Run `bundle install`.

### Step 3: Create `tea` migration & model
* ask student for model generator command

1. `rails g model tea`
2. Set up a tea migration with `t.string :flavor, null: false` and 
`t.float :price, null: false` and `t.string :description`
3. Add an index `add_index :teas, :flavor, unique: true`
4. Run `rails db:create` and `rails db:migrate`
  - If you run into trouble because the DB already exists you can run `rails db:drop`
  and rerun the above commands
5. Run `bundle exec annotate --models`
6. Add validations `validates :flavor, uniqueness: true`
7. Add validations `validates :flavor, :price, presence: true`

### Step 4: Seeds file

* Paste in seed file from the `demo_solution` and run `rails db:seed` to add 
them to the DB and give us some data to work with

### Step 5: Setup Teas Routes

Our Rails backend is going to serve purely as an API, so we will
define our teas routes and controller under an API namespace. We can create the 
controller like so:
`rails g controller api/teas`

Here's what the controller should look like

```ruby
  # teas_controller.rb
  class Api::TeasController < ApplicationController
    # controller is under the api folder to indicate we are sending back api/json 
    # info
    def index 
      @teas = Tea.all 
      render json: @teas 
    end

    def create 
      tea = Tea.new(tea_params) #doesn't have to be @tea. no more views 
      if tea.save
        render json: tea 
      else
        render json: tea.errors.full_messages, status: 422 
      end

    end 

    def tea_params 
      params.require(:tea).permit(:flavor, :price, :description)
    end
    
  end
```

And our routes like so:

```ruby
  # routes.rb
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :teas, only: [:index, :create]
    end
  end
```

By putting your routes inside of a namespace like that, you set 
up your routes so that you will have to access `api/teas`. Using 
an api namespace helps avoid name collisions.

The `defaults: {format: :json}` makes sure that your responses will be in json 
by default, rather than html.

### Step 6: Connect and Test

Let's go ahead and move yesterday's demo into this rails folder to act as the 
frontend for our rails backend.

1. Go to your `config/puma.rb` and change PORT 3000 to 5000 on line 18
  ```rb
    # should be around line 18
    port ENV.fetch("PORT") { 5000 }
  ```
2. Move entire React folder into top level directory of our rails app
  - rename to `frontend` if named somethinge else like `demo_start` or `tea_shop`
3. In `frontend` Add `"proxy": "http://localhost:5000",` to your `package.json`.
4. run `npm install` in the frontend folder to reinstall all our packages
6. run `npm start` and `rails s` in their respective folders
7. check that it all still works!

* Head back to slides and take a break
---

## Break

---

## Connecting backend & frontend

* Receiving backend data through fetch requests

```js
  fetch('/api/teas')
    .then(res => res.json())
    .then(data => console.log(data));
```
Note:

* The place that thunks are going to come into play for us is when we start 
making fetch requests
* We know that we need some api utils to be able to connect our backend and 
frontend, however how will we set that up with redux if redux can only handle 
POJO's, and we know our API utils is an actual promise? The answer in this case 
is by using a combination of thunks with redux

---

## Demo: APIUtils - fetch

### Step 1: Fetch

We are going to create a `util` folder nested inside our `frontend/src` folder, 
then create a new file `tea_api_util.js` 

Finally, let's export some functions in this new file to create our ajax requests:

```js
  // tea_api_util.js
  export const requestTeas = () => {
    return fetch('/api/teas');
  };

  export const postTea = (tea) => {
    return fetch('/api/teas', {
      method: 'POST',
      body: JSON.stringify(tea),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  };
```

### Step 2: Test it

Now that we have created our ajax calls, let's throw them on the window to test 
them out!

Import our utils to our `index.js` entry file:

```js
  // index.js
  import * as TeaAPIUtil from "./util/tea_api_util";
```
Then throw them on the window:

```js
  // index.js
  window.TeaAPIUtil = TeaAPIUtil;
```

Now we can send ajax requests in the console, and log the results:

Testing `getAllTeas`:
```js
  // in console
  TeaAPIUtil.requestTeas().then(res => res.json()).then(data => console.log(data));
```

Testing `postTea`:
```js
  // in console
  let tea_params = { flavor: 'Par', price: 2.5, description: "Its par tea time" };

  TeaAPIUtil.postTea(tea_params).then(res => res.json()).then(data => console.log(data));
```

Nice! We are now querying our database using our Utils. We could actually at this point use these Utils directly in our React Components to pull data from our backend... but how do we get them into the Redux Store?

Head back to the slides

---

### What about updating our Redux store?

Note:

* With what we've done, we _can_ make a react app that talks to a backend
* We could import the APIUtils directly into a component, then make the requests 
from the component and update its local state.
* But how can we use these functions to update our Redux Store? The answer is 
Thunk Middleware, and thunk action creators

---

## Thunk Middleware

* Allows you to write _thunk_ action creators that return a _function_ instead of POJO
* Have actions that are POJOs _or functions_
* **Benefits:**
	* Delay the dispatch of an action
  * Conditionally dispatch actions
* `applyMiddleware()`

Note:

* This is where Thunk Middleware comes into play for us
* Thunk middleware will Intercept `thunk_action_creators` that are dispatched 
_before_ they hit the `rootReducer`, and convert them into regular actions

---

## Redux actions

* Regular **action creator**:

```js
  export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas
  });
```

---

## Redux actions: thunks

* **Thunk action creator**:

### Promise syntax
```js
  export const fetchAllTeas = () => (dispatch) => {
    fetch(`/api/teas`)
      .then(res => res.json())
      .then(data => dispatch(receiveTeas(data)))
  }
```

### Async syntax
```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json()
    dispatch(receiveTeas(data))
  }
```

Note:
* Just say that that is what this type of function is called. It's going to get dispatched and anything that is dispatched is called an "action". This function is designed to be dispatched to something called thunk middleware. It will be broken down further in slides to come.

---

## Redux actions compared

```js
  export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas
  });
```

```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json()
    dispatch(receiveTeas(data))
  }
```

* Point out that `requestTeas` uses/calls `receiveTeas`

---

## What is Thunk?!: Thunk action creator breakdown

```js
  // thunk action creator
  export const fetchAllTeas = () => {
    // thunk action
    return async (dispatch, getState) => {
        // fetch request
        const res = await fetch(`/api/teas`);
        const teas = await res.json()
        // when we get a response, dispatch regular action
        dispatch(receiveTeas(teas))
        // ex: dispatch({type: RECEIVE_TEAS, teas: teas})
    }
  }
```

Note

* Go over a high level explanation of the concept and what we are trying to achieve
* Talk about how the dispatch (and getState) is coming in as an argument from 
somewhere else (thunk middleware). Thunk middleware and thunk action creators 
are made to work in conjunction. 

---

## DEMO: Thunk Action Creators

Let's write out some of these new thunk action creators.

In our `teaReducer.js` file:

```js
  // teaReducer.js
  import * as TeaApiUtil from "../util/tea_api_util";

  export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";

  export const receiveAllTeas = (teas) => ({
    type: RECEIVE_ALL_TEAS,
    teas
  });
```

Now let's write our thunk actions:

```js
  // teaReducer.js

  /*-----THUNK ACTION CREATORS -----*/
  export const fetchAllTeas = () => async (dispatch, getState) => {
    const res = await TeaApiUtil.requestTeas();
    const teas = await res.json();
    dispatch(receiveTeas(teas));
  };

  export const createTea = (tea) => async dispatch => {
    const res = await TeaApiUtil.postTea(tea);
    const data = await res.json();
    dispatch(receiveTea(data));
  };
```

Great, let's test out our thunk action on the window and see if we can fetch 
teas from the backend and have our store update accordingly.
- import `fetchAllTeas` and `createTea` into the `index.js` and add to the window

```js
  // index.js
  import { receiveTea, receiveTeas, removeTea, fetchAllTeas } from './store/teaReducer';
  // ...
  window.fetchAllTeas = fetchAllTeas;
```

```js
  // in console
  store.dispatch(fetchAllTeas());
```

Notice the error - we need to actually apply thunk middleware to the store so that
it knows what to do with an action that is a function instead of a plain object

Add logger and thunk node packages: 
- In the `frontend` folder run `npm install redux-logger redux-thunk`
  - rerun `npm start`

Modify the store file to look as follows:

```js
  // store/index.js
  import { createStore, applyMiddleware } from 'redux';
  import logger from 'redux-logger';
  import thunk from 'redux-thunk';
  import rootReducer from '../reducers/root_reducer';

  const configureStore = (preloadedState = {}) => {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    );
  }

  export default configureStore;
```

Test that our thunk action creators now get invoked by the store instead of 
throwing an error

```js
  // in console
  store.dispatch(fetcAllTeas());
  let tea = {flavor: 'banana', price: 4.5, description: 'Bananatastic' }
  store.dispatch(createTea(tea))
```
- Our TeaIndex should update with all the teas from the database 
- Show students the log of the previous state, action and next state
- Discuss how our `TeaIndex` has subscribed to the `teas` slice of state from the
store via `useSelector`
  - As a result of the store's updated state the subscribed `TeaIndex` rerenders 
  with the updated tea information.

- Refresh the page and see that the Teas are gone again. Why?
  - The refresh reloaded our app and cleared out our Redux store
  - On initial load of the `TeaIndex` component it doesnt have the teas
  - We need to tell it to go fetch the teas
    - Enter in `useEffect`

So with that in mind and now that we've set up our actions and reducer, where are we actually going to 
call these thunk action creators?

Let's jump into the `TeaIndex` Component:
- import `useEffect`, `useDispatch` and `fetchAllTeas`
- add `dispatch` and call `useEffect`  to fetch all teas when the TeaIndex component loads to the 
page for the first time.

```js
  // TeaIndex.js
  // more imports
  import {useEffect} from 'react';
  import {useSelector, useDispatch} from 'react-redux';
  import {fetchAllTeas} from '../../store/TeasReducer';

  // add dispatch and useEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTeas())
  }, []);
```


Let's test it out. Refresh the page and we should now pull all our teas into the 
index. 

Head back to slides after testing and take a break

---

## Break

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer(s)

---

![Redux with Rails again](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

## Demystifying the thunk signature

* It looks weird

```javascript
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

  export default thunk;
```

Note:

* Don't go too deep into the function signature. Let them know that all middleware 
has this signature! (That's how redux knows how to use it)

---

## Breaking down thunk

```js
  // applyMiddleware will pass in the store
  // this will be invoked for you
  const thunk = function(store) {
    // applyMiddleware will pass in next
    // next represents next piece of middleware to receive action
    // Will be invoked for you
    return function(next) {
      // Action is what WE wrote in our code
      // will be invoked for you
      return function(action) {
        if (typeof action === "function") {
          // invoke the action, i.e. make an AJAX request
          return action(store.dispatch, store.getState);
        }
        return next(action);
      };
    };
  };
```

---

## DEMO: Thunk Middleware

Ok, let's now update our form so we can persist new teas to our backend.

In the AddTeaForm Component:
- import the `createTea` thunk action creator
- remove the `id` variable and key value pair from `handleSubmit`
  - The DB will generate this for us now
- replace `receiveTea` with `createTea` in your handleSubmit function.

```js
  // AddTeaForm.js
  import {createTea} from "../../store/TeaReducer";
  // ...
  const handleSubmit = e => {
    e.preventDefault();
    // let id = Math.floor(Math.random()*1000);
    const tea = {
      // id: id,
      flavor: flavor,
      price: price
    };
    debugger
    // dispatch(receiveTea(tea));
    dispatch(createTea(tea));
    setFlavor('');
    setPrice('');
  };
```

Now, in order to test it, let's throw some debuggers around so we can really see 
what's going on.

Let's throw a debugger in:

- handleSubmit
- `createTea` thunk action
- TeasController#create action
- receiveTea (convert to explicit return)
- TeasReducer (under case for RECEIVE_TEA)

Now refresh, and let's create a new tea.

Success! We now have a fully functioning react/redux app with a rails backend 
persisting our data.

* If there is time you can:
  - update the `AddTEaForm` to handle a `description` variable
  - update the `TeaIndex` to display a tea's `description`
  - NOTE: if doing so will put you over lunch, encourage students to add this on 
  their own

Head back to slides to take questions then KAHOOT!!!

---

## Questions?

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)

---

# THANK YOU
