# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users` - returns the user information of displayed chirps and for the User Search feature
+ `POST /api/users` - sign up

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `chirps`
+ `GET /api/chirps` - returns relevant chirps (filtered by `data`/`params`)
+ `GET /api/chirps/:id` - returns chirp
+ `POST /api/chirps` - creates a chirp
+ `PATCH /api/chirps/:id` - edit a chirp
+ `DELETE /api/chirps/:id` - remove a chirp

### `likes`
+ `POST /api/chirps/:chirp_id/likes` - like a chirp
+ `DELETE /api/chirps/:chirp_id/likes` - unlike a chirp

Note: likes does not include a `GET` route because we will have these routes render the `api/chirps/show.json.jbuilder` view. See [Sample State](sample-state).