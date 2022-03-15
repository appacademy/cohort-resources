# W12D1 Backend and Frontend Routes

---
## Backend Routes 
### Main Points
  1. API Routes are how we'll be sending and receiving information between our frontend and backend.
  2. Aim to keep our routes RESTful but there may be situations that need a custom route
  4. Include relevant params for each of these routes
---

### Backend (API) Routes
- What information you'll make ajax requests for
- Will that information have its own route or be included in a payload? (ex: no 'likes' index route)
- NOT FRONTEND ROUTES

---
### `users`
+ `GET /api/users` - returns the user information for the User Search feature
+ `POST /api/users` - sign up

### `chirps`
+ `GET /api/chirps` - returns relevant chirps (filtered by `data`/`params`)
+ `GET /api/chirps/:id` - returns chirp
+ `POST /api/chirps` - creates a chirp
+ `PATCH /api/chirps/:id` - edit a chirp
+ `DELETE /api/chirps/:id` - remove a chirp

### `likes`
+ `POST /api/likes` - like a chirp
+ `DELETE /api/likes` - unlike a chirp

---

### Superfluous Routes - AVOID THEM

+ `GET /api/likes` - all the likes 

Is this needed? 
+  NO 
- `likes` are associated with a chirp. Call the association `likes` when a `chirp` is fetched. 
  - when a `chirp` is fetched, you'd send up the `likes` in the `json.jbuilder`
- We don't ever need an `index` for all the `likes`. 
- Don't create routes you will not use. 
- Same reasoning if your app has `comments` and `reviews` associated with a `post`.
  - Just call the associations in your `json.jbuilder` and send all that data to the frontend.

---

### Superflous Routes - Continued

- `GET /api/users/:user_id/chirps/:id` 
  - PLEASE NO. If you need to find a chirp, you just need the id.
    - ` GET /api/chirps/:id `
    - this route is already defined and gives you the data you need.
- Don't have two routes leading to the same result. 

---

### `nesting?` 
+ You can 
  + `GET /api/users/:user_id/chirps` 

+ But Don't 
  + you have this information in your slices of state on the frontend
  + you can use `ownProps.match.params.otherId` to retrieve the ids you need 

---

### Questions about Backend Routes?

---

## Frontend Routes
### Main Points
  1. Frontend Routes are going to be used to determine what components get rendered on the page.
  
---

## Frontend Routes
+ `/login` - login form
+ `/signup` - sign-up from
+ `/feed` - chirp feed, homepage
+ `/users/:userId` - user profile
+ `/chirps/new` - create a chirp
+ `/chirps/:chirpId` - chirp show
+ `/chirps/:chirpId/edit` - update a chirp

- These are the hash routes that will be visible to the user as they navigate your app.
  - You would define them and their componenets in your `<switch>`
- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

### Questions about Frontend Routes?

---

## Other FSP logistics 

---

### Github Issues
+ For your design docs your PAs will be adding issues for you to follow as guidelines
+ Once you start on your FSP
  + Create an issue for each MVP (including details and time estimates)
  + Assign your PA so they can track your progress
  + Your PA will close your issue when you've met the requirements
  + MVP requirements can be found on your scorecards
    - Bug Free, Fully Styled, Error Handling, Dead Link Free, 
    - CRUD complete: Create (POST), Read (GET), Update(PUT/PATCH), Delete (DELETE)

---

### Tips for the FSP

+ Have a working app at every stage of the project. It might not be a
  "good" app, but it should function.
+ Iterate quickly
  + build small pieces to completion
  + test often: write a method, test a method
+ Complete one feature at a time: Write the full stack for each part of your
  app before moving on to the next piece.
  - Backend
    - migration, model, controller, jbuilder view, seeds
  - Frontend
    - apiUtils, actions, reducers, container, component, css
+ DON'T write a complete Rails app first and then add React on top.

---

# Due Dates 
* Frontend Routes: W12D2 at 9am (Tuesday)
* Backend Routes: W12D2 at 9am (Tuesday)
* Full Proposal: W12D5 at 9am (Friday)
* TAs will not provide help on full stack projects until the design documents/proposal are finished!

---

### [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Questions?