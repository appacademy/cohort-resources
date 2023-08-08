# W12D2 Full Stack Backend Routes

---

## Main Points
  1. API Routes are how we'll be sending and receiving information between our frontend and backend.
  2. Aim to keep our routes RESTful but there may be situations that need a custom route
  3. Include relevant params for each of these routes
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
- NO
- `likes` are associated with a chirp. Call the association `likes` when a `chirp` is fetched. 
  - when a `chirp` is fetched, you'd send up the `likes` in the `json.jbuilder`
- We don't ever need an `index` for all the `likes`. 
- Don't create routes you will not use. 

---
* same reasoning if your app has comments and reviews associated with a post

+ `GET /api/users/:user_id/chirps/:id` 

- PLEASE NO. If you need to find a chirp, you just need the id. 
  e.g. ` GET /api/chirps/:id `-> this route is already defined 
- Don't have two routes leading to the same result. 
---

### `nesting?` 
+ You can 
  + `GET /api/users/:user_id/chirps` 
+ But you can just as well pass in the user_id with a query string
  + `GET /api/chirps?user_id=1` 
--- 

## Backend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Questions

--- 

Full Stack Frontend Routes

---

## Main Points
  1. Frontend Routes are going to be used to determine what components get rendered.
  2. Think of each route as a page, or a section of a page
  
---

## Frontend Routes
+ `/login`
+ `/signup`
+ `/feed` - chirp feed, homepage
+ `/users/:userId` - user profile
+ `/chirps/new` - create a chirp
+ `/chirps/:chirpId` - chirp show
+ `/chirps/:chirpId/edit` - update a chirp

- These are the routes that will be visible to the user as they navigate your app.
- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

## Frontend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Questions

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
* Backend/Frontend Routes as well as all other unfinished design docs due tomorrow, W12D3
* TAs will not provide help on full stack projects until the design documents/proposal are finished!

---

## Project completion Reminder
- Your progress on this project will directly translate into your readiness and success in the Job Search
- At a minimum you should complete 60% of your FSP by the end of the two weeks
  - A complete and styled; User Auth, Feature 1 and Feature 2
  - Successful hosting of your website
  - A complete Production README
- Anything you do not complete will need to be completed before you are approved to start your job search
- You should aim for 100% completion
  - Success in software development is not aligned with minimum expectations
  - 4 features and all 7 MVPs is possible in two weeks

Students with an incomplete project (<5 total MVPs completed) may be deferred

---

## Questions?
