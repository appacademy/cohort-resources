# Postgres Database Schema

## `users`

| column name       | data type | details                   |
| :---------------- | :-------: | :------------------------ |
| `id`              |  integer  | not null, primary key     |
| `username`        |  string   | not null, indexed, unique |
| `email`           |  string   | not null, indexed, unique |
| `password_digest` |  string   | not null                  |
| `session_token`   |  string   | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

- index on `username, unique: true`
- index on `email, unique: true`
- index on `session_token, unique: true`

## `chirps`

| column name  | data type | details                        |
| :----------- | :-------: | :----------------------------- |
| `id`         |  integer  | not null, primary key          |
| `body`       |  string   | not null                       |
| `author_id`  |  integer  | not null, indexed, foreign key |
| `created_at` | datetime  | not null                       |
| `updated_at` | datetime  | not null                       |

- `author_id` references `users`
- index on `author_id`

## `likes`

| column name  | data type | details                        |
| :----------- | :-------: | :----------------------------- |
| `id`         |  integer  | not null, primary key          |
| `user_id`    |  integer  | not null, indexed, foreign key |
| `chirp_id`   |  integer  | not null, indexed, foreign key |
| `created_at` | datetime  | not null                       |
| `updated_at` | datetime  | not null                       |

- `user_id` references `users`
- `chirp_id` references `chirps`
- index on `[:chirp_id, :user_id], unique: true`

// We don't need a separate index for `chirp_id` or `user_id` because the first index adds it for us.
