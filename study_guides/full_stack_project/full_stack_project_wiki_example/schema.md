## **`users`**

|   Column Name   | Data Type |          Details          |
| :-------------: | :-------: | :-----------------------: |
|       id        |  integer  |   not null, primary key   |
|      email      |  string   |     not null, indexed     |
| password_digest |  string   |         not null          |
|  session_token  |  string   | not null, indexed, unique |
|   created_at    | datetime  |         not null          |
|   updated_at    | datetime  |         not null          |

## **`stories`**

| Column Name | Data Type |         Details         |
| :---------: | :-------: | :---------------------: |
|     id      |  integer  |  not null, primary key  |
|  author_id  |  integer  |  not null, foreign key  |
|   feed_id   |  integer  |       foreign key       |
|    title    |  string   | not null,unique,indexed |
|    body     |   text    |     not null,unique     |
| created_at  | datetime  |        not null         |
| updated_at  | datetime  |        not null         |

## **`comments`**

| Column Name | Data Type |        Details        |
| :---------: | :-------: | :-------------------: |
|     id      |  integer  | not null, primary key |
|  author_id  |  integer  | not null, foreign key |
|    body     |   text    |       not null        |
| created_at  | datetime  |       not null        |
| updated_at  | datetime  |       not null        |

## **`likes as snaps`**

| Column Name | Data Type |        Details        |
| :---------: | :-------: | :-------------------: |
|     id      |  integer  | not null, primary key |
|   user_id   |  integer  | not null, foreign key |
|  story_id   |  integer  | not null, foreign key |
| created_at  | datetime  |       not null        |
| updated_at  | datetime  |       not null        |

## **`follows`**

| Column Name | Data Type |        Details        |
| :---------: | :-------: | :-------------------: |
|     id      |  integer  | not null, primary key |
| follower_id |  integer  | not null, foreign key |
| followee_id |  integer  | not null, foreign key |
| created_at  | datetime  |       not null        |
| updated_at  | datetime  |       not null        |

## **`feed`**

| Column Name | Data Type |        Details        |
| :---------: | :-------: | :-------------------: |
|     id      |  integer  | not null, primary key |
| categories  |  string   | not null, foreign key |
