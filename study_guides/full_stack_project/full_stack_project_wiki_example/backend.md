## HTML
* `GET /` `StaticPagesController#root`

## API Endpoints
## **`users`**
* `GET /api/users`-returns user info of stories written and for user search
* `POST /api/users`-sign up

## **`session`**
* `POST /api/session`-log in
* `POST /api/session`-log out

## **`stories`**
* `GET /api/stories`-returns relevant stories
* `GET /api/stories/:id`-return story
* `POST /api/stories`-creates story
* `PATCH /api/stories/:id`-updates story
* `DELETE /api/stories/:id`-removes story

## **`likes`**
* `POST /api/stories/:story_id/likes`-likes a story
* `DELETE /api/stories/:story_id/likes`-removes a like 

## **`comments`**
* `POST /api/stories/:story_id/comments`-comments on a story
* `DELETE /api/stories/:story_id/comments`-remove comment from a story 

## **`follows`**
* `POST /api/users/:user_id/follows`-follows a user
* `DELETE /api/users/:user_id`-unfollows a user
