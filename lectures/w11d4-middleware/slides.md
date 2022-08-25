### W11D4
## Thunk Middleware

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

* Just listen and try to take in _CONCEPTS_ for lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Explain it to a friend!

---

## React Review

* Components
* Props

---

## Redux

* Store
  * `getState` (function) -> read
  * `dispatch` (function) -> write
* `Provider` -> conext for your whole app
* `useSelector` & `useDispatch` -> React-Redux hooks

---

![Redux Cycle](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux-cycle-only.png)

---

![Redux with Rails](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux-cycle-with-rails.png)

---

### Redux with Rails
![Redux Cycle GIF](https://blog.gisspan.com/img/redux.gif)

---

# DEMO RAILS SETUP

Note:
(Mike) Here are my notes for setting up a rails backend for this app:

### Step 1: Review the code from yesterday

Go over the code from yesterday's demo:

* Review the file structure: components (presentational vs containers), reducers, actions, store
* Make sure to go over anything that may have changed from yesterday (aka selectors)

### Step 2: Generate a new Rails app and `teas` migration

Now lets get started on setting up our Rails backend!

1. Generate a new Rails app: `rails new TeaTime -G -T --database=postgresql --api --minimal`.
2. Update your Gemfile with `pry-rails`, `binding_of_caller`, `better_errors` and `annotate` under `:development`.
3. Comment out the debug gem and add `gem "byebug"`.
4. Run `bundle install`.

### Step 3: Create `tea` migration & model

1. `rails g model tea`
2. Set up a tea migration with `t.string :flavor, null: false` and `t.float :price, null: false` and `t.string :description`
3. Add an index `add_index :teas, :flavor, unique: true`
4. Add validations `validates :flavor, presence: true, uniqueness: true`
5. Add validations `validates :flavor, :price, presence: true`
6. Run `rails db:setup` and `rails db:migrate`

### Step 4: Seeds file

* Paste in seed file and run `rails db:seed` to add them to the DB and give us some data to work with

### Step 5: Setup Teas Routes

Our Rails backend is going to serve purely as an API, so we will
define our teas routes and controller under an API namespace. We can create the controller like so:
`rails g controller api/teas`

Here's what the controller should look like

```ruby
class Api::TeasController < ApplicationController
  # controller is under the api folder to indicate we are sending back api/json info
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
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :teas, only: [:index, :create]
    end
  end
```

By putting your routes inside of a namespace like that, you set 
up your routes so that you will have to access `api/teas`. Using 
an api namespace helps avoid name collisions.

The `defaults: {format: :json}` makes sure that your responses will be in json by default, rather than html.


### Step 7: Connect and Test

Let's go ahead and move yesterday's demo into this rails folder to act as the frontend for our rails backend.

1. Go to your `config/puma.rb` and change PORT 3000 to 5000 on line 18
2. Move entire frontend folder into top level directory of our rails app
3. Add `"proxy": "http://localhost:5000",` to your `package.json`.
4. run `npm install` in the frontend folder to reinstall all our packages
6. run `npm start` and `rails s` in their respective folders
7. check that it all still works!


---

## Connecting backend & frontend

* Receiving backend data through fetch requests

```js
fetch('api/teas')
  .then(res => res.json())
  .then(data => console.log(data))
```

---

### Demo: APIUtils - fetch

---

### What about updating our Redux store?

---

## Thunk Middleware

* Allows you to write _thunk_ action creators that return a _function_ instead of POJO
* Have actions that are POJOs _or functions_
* **Benefits:**
	* Delay the dispatch of an action
  * Conditionally dispatch actions
* `applyMiddleware()`

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

```js
export const fetchAllTeas = () => (dispatch) => {
  fetch(`api/teas`)
    .then(res => res.json())
    .then(data => dispatch(receiveTeas(data)))
}
```

---

## Redux actions compared

```js
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});
```

```js
export const fetchAllTeas = () => (dispatch) => {
  fetch(`api/teas`)
    .then(res => res.json())
    .then(data => dispatch(receiveTeas(data)))
}
```

---

## What is Thunk?!

---

## Thunk action creator break down

```js
// thunk action creator
export const fetchAllTeas = function() {
  // thunk action
	return function(dispatch, getState) {
  		// AJAX call
      return TeaAPIUtil.getAllTeas()
      	// when we get a response, dispatch regular action
        .then(teas => dispatch(receiveTeas(teas))
        // aka dispatch({type: RECEIVE_TEAS, teas: teas})
  }
}
```

---

### DEMO: Thunk Action Creators

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer

---

![Redux with Rails again](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux-cycle-with-rails.png)

---

## Demystifying the thunk signature

* It looks weird

```javascript
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
}

export default thunk;
```

---

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
      	// invoke the action, aka make AJAX request
      	return action(store.dispatch, store.getState);
      }
      return next(action);
    }
  }
}
```

---

### DEMO: Thunk Middleware

---


# THANK YOU