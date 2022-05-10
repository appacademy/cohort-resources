# W12D1 FSP Routes

---

## Main Points
- *Back-End Routes* define API endpoints
	- Aim to keep our routes REST-ful
  - Specify relevant params
- *Front-End* Routes conditionally render components
	- Don't include auth routes if your app uses a [modal](https://www.etsy.com/)

---

## Back-End (API) Routes
- What information do I need to request?
- What information do I need to persist?
- Does a given resource need a dedicated route?
	- Don't forget that we can bundle related information using Jbuilder

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

### Tips and Hints

+ Avoid superfluous routes
	+ Consider a Facebook clone
	+ Do we need the following route: `GET /api/likes`
+ Avoid nested routes

---

### Backend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Frontend Routes
+ These are the hash routes that will be visible to the user as they navigate
	+ `/login`
	+ `/signup`
	+ `/feed` - chirp feed, homepage
	+ `/users/:userId` - user profile
	+ `/chirps/new` - create a chirp
	+ `/chirps/:chirpId` - chirp show
	+ `/chirps/:chirpId/edit` - update a chirp

---

### Tips and Hints

- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

### Frontend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Due Dates 
* Everything due tomorrow (5/10)!

---

## Questions

--- 

