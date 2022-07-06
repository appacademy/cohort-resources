
# W11D2 
## Full Stack Backend Routes and Frontend Routes

---

## Backend Routes - Main Points
  1. API Routes are how we'll be sending and receiving information between our frontend and backend.
  2. Aim to keep our routes RESTful but there may be situations that need a custom route
  4. Include relevant params for each of these routes
---

## Backend (API) Routes
- What information you'll make ajax requests for
- Will that information have its own route or be included in a payload? (ex: no 'likes' index route)
- NOT FRONTEND ROUTES
	- routes for frontend navigation vs requests to the db

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
---

### `likes`
+ `POST /api/likes` - like a chirp
+ `DELETE /api/likes` - unlike a chirp

---

### Superfluous Routes - AVOID THEM

+ `GET /api/likes` - all the likes 

Is this needed?
---
## NO 
---
- `likes` are associated with a chirp. Call the association `likes` when a `chirp` is fetched. 
- when a `chirp` is fetched, you'd send up the `likes` in the `json.jbuilder`
- We don't ever need an `index` for all the `likes`. 
- Don't create routes you will not use. 
- same reasoning if your app has comments and reviews associated with a post

---

### is this route ok?

- `GET /api/users/:user_id/chirps/:id` 


---

### `nesting?` 
+ You can 
  + `GET /api/users/:user_id/chirps` 

+ But Don't 
  + you have information in your slices of state 
  + you can use `ownProps.match.params.otherId` to retrieve the ids you need 

---

## Backend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Frontend Main Points
  1. Frontend Routes are going to be used to determine what components get rendered.
  
---

## Frontend Routes
+ `/login`
+ `/signup`
+ `/feed` - chirp feed, homepage
+ `/users/:userId` - user profile
+ `/chirps/new` - create a chirp
+ `/chirps/:chirpId` - chirp show
+ `/chirps/:chirpId/edit` - update a chirp

- These are the hash routes that will be visible to the user as they navigate your app.
- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

## Frontend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

### Github Issues
+ We will create Issues for you for design docs and user auth
+ Create an issue for each future MVP (including details and time estimates)
+ Assign your PA so they can track your progress

---

# Due Dates 
* Frontend Routes: W11D3
* Backend Routes: W11D3
* Full Proposal: W11D5 
* TAs will not provide help on full stack projects until the design documents/proposal are finished!


---
