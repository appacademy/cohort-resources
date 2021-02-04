
# W11D3 Full Stack Backend Routes

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

### `nesting?` 
+ You can 
  + `GET /api/user_id/chirps` 

+ But you also don't need to
  + you have information in your slices of state 

---

## Questions

---

# Due Dates 
* Backend Routes: W11D4

