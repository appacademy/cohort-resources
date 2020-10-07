
# Full Stack Routes


---

## Main Points
  1. Frontend Routes are going to be used to determine what components get rendered.
  2. API Routes are how we'll be sending and receiving information between our frontend and backend.
  3. Aim to keep our routes RESTful but there may be situations that need a custom route
  4. Include relevant params for each of these routes
---

## Frontend Routes
+ `/login`
+ `/signup`
+ `/feed` - chirp feed, homepage
+ `/users/:userId` - user profile
+ `/chirps/new` - create a chirp
+ `/chirps/:chirpId` - chirp show
+ `/chirps/:chirpId/edit` - update a chirp

- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

## Backend (API) Routes
- What information you'll make ajax requests for
- Will that information have its own route or be included in a payload? (ex: no 'likes' index route)

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
## WHERE DO THESE GO?

---

## Repo Wiki
* Backend Routes
* Frontend Routes 

---


### Github Issues
+ Create an issue for each MVP (including details and time estimates)
+ Assign your PA so they can track your progress
+ Your PA will close your issue when you've met the requirements

---

### Tips for the FSP

+ Have a working app at every stage of the project. It might not be a
  "good" app, but it should function.
+ Iterate quickly
  + build small pieces to completion
  + test often: write a method, test a method
+ Complete one feature at a time: Write the full stack for each part of your
  app before moving on to the next piece.
+ DON'T write a complete Rails app first and then add React on top.

---

# Due Dates 
* Routes: W11D4
* Full Proposal: W11D5 
* TAs will not provide help on full stack projects until the design documents/proposal are finished!

