
# W11D3 Full Stack - Backend Routes

---

## Main Points
  1. API Routes are how we'll be sending and receiving information between our frontend and backend.
  2. Aim to keep our routes RESTful but there may be situations that need a custom route
  4. Include relevant params for each of these routes
---

## Backend (API) Routes
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

---

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

* same reasoning if your app has comments and reviews associated with a post

---

### Superfluous Routes - AVOID THEM (continued)

+ `GET /api/users/:user_id/chirps/:id` 

- PLEASE NO. If you need to find a chirp, you just need the id. 
  e.g. ` GET /api/chirps/:id `-> this route is already defined 
- Don't have two routes leading to the same result. 

---

### `nesting?` 
+ You can 
  + `GET /api/users/:user_id/chirps` 

+ But Don't 
  + you have information in your slices of state 
  + you can use `ownProps.match.params.otherId` to retrieve the ids you need 

---

## Questions

---

# Due Dates 
* Backend Routes: W11D5 9am

---

### [Bluebird Wiki](https://github.com/appacademy/bluebird/wiki/backend-routes)

