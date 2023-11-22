# W11D4
## Rails as a JSON API and Jbuilder

---

## Learning Objectives

* Remember Rails
* Use Rails as a JSON API
+ Understand how to use Jbuilder to sculpt JSON responses

---

## Learning Outline

* Rails as a JSON API
* Long demo!
  * Rails backend API
    * Routes, Controllers, Models and Migrations
  + Using Jbuilder 
    * Structured responses in Views
  + Normalizing State Shape

---

## Rails as a JSON API

* Rails will: 
  - house a React app in a frontend folder
  - respond to HTTP requests from the frontend with data from our database 
  in the form of JSON

---

## Demo: Rails backend setup

---

## Break

---

## Jbuilder Basics

+ `Jbuilder` is a simple DSL tool to declare JSON structures 
  + Will help us sculpt response objects
+ This will replace the `render json: variable` of a controller's action
  + Instead, we will be rendering a `.json.jbuilder` file
    + Similar to rendering a view

---

## Jbuilder Common Methods

+ `extract!`
+ `set!`
+ `array!`
+ `partial!`

Fun Fact:
"!" means its a json method, not a key of a pojo.

---

## `extract!`

`extract!` is best used when you want the object's key to match the column name.

```ruby
  # @pupper = { id: 10, name: 'Phil', age: 2 }

  json.extract! @pupper, :name, :age
```

```json
  {"name": "Phil", "age": "2"}
```

---

## `set!`

`set!` is best used when you need to dynamically create a key

```rb
  # @dog = { id: 10, name: 'Phil' }

  json.set! @dog.id do
    json.extract! @dog, :name
  end
```

```json
  { "10" : { "name": "Phil" } }
```

---

## `array!`

You can also extract attributes from an array directly.

```rb
  # @puppinos = [
  #    { id: 10, name: 'Phil', fluffy: true},
  #    { id: 15, name: 'Niko', fluffy: false }
  #    ]

  json.array! @puppinos, :fluffy, :name
```

```json
  [
      {"name": "Phil", "fluffy": true}, 
      {"name": "Niko", "fluffy": false}
  ]
```

---

## `partial!`

```rb
  # partial in `api/puppers/_pupper.json.jbuilder`
  # json.extract! pupper, :name, :age

  json.partial! 'pupper', pupper: @pupper
```

```json
  {"name": "Phil", "age": "2"}
```

---

## Code Demo Part 2 - Reworking controller actions to curate data using JBuilder

---

## Break

---

## So where are we going with all of this?

---

## Frontend State Shape and Organization

---

## Organizing your state shape

* Disorganized State:
  * easy to setup
  * harder to make changes in reducers
  * confusing and buggy, impossible to access from components
* Organized State:
  * takes intention to maintain
  * easier to make changes in reducers
  * more consistent and predictable to access from components

#### If you don't organize your store well, you end up doing more work.

---

## What is normalization?

---

## Bad State

```js
  const posts = [
    {
      id : 1,
      author : { id: 1, username : "user1", name : "User 1" },
      body : "......",
      comments : [
        {
          id : 1,
          author : { id: 2, username : "user2", name : "User 2" },
          body : ".....",
        },
        {
          id : 2,
          author : { id: 3, username : "user3", name : "User 3" },
          body : ".....",
        }
      ],
      likers : [
        {
          id : 1,
          username : "user2", 
          name : "User 2"
        },
        {
          id : 2,
          username : "user3",
          name : "User 3"
        }
      ]
    }
  ]
```

---

## Good State

```js
  {
    posts : {
      1 : {
        id : 1,
        authorId : 1,
        body : "......",
        commentIds : [1, 2]
      }
    },
    comments : {
      1 : {
        id : 1,
        authorId : 2,
        body : ".....",
      },
      2 : {
        id : 2,
        authorId : 3,
        body : ".....",
      },
    },
    users : {
      1 : {
        id: 1,
        username : "user1",
        name : "User 1",
      },
      2 : {
        id: 2,
        username : "user2",
        name : "User 2",
      },
      3 : {
        id: 3,
        username : "user3",
        name : "User 3",
      }
    }, 
    likes : {
      1 : {
        id: 1,
        postId: 2,
        userId: 1
      },
      2 : {
        id: 2,
        postId: 1,
        userId: 2
      },
      3 : {
        id: 3,
        postId: 3,
        userId: 2
      }
    }
  }
```

---

## Why Normalize State Shape
* Duplicated data is hard to manage
* Given an item's ID, we can access it instantaneously 
  * Think back to Big O day
* Avoid complex logic in reducers to handle deeply nested objects
* Avoid unnecessary re-renders of connected components 

[Source](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)
  
---

## How to Normalize State Shape

+ Each type of data gets its "table" in the state.
+ POJO where keys are IDs of items, and values are item objects themselves.
+ Any references to other individual items should be done by storing the item's ID.
+ Arrays of IDs should be used to indicate ordering.

---

## Normalizing associated data

* Data with `belongs_to` relationship stores ID of associated data
* Data with `has_many` relationship stores array of IDs of associated data
* Joins tables occupy their own slice of state

---

## Jbuilder case sensitivity

+ ruby to javascript
  + user_id ==> userId
+ Your redux state follows javascript convention.

```ruby
  # environment.rb
  Jbuilder.key_format camelize: :lower
```

---

## Demo Part 3 - Tea Details with associated data

---

## Debugging Backend Errors

+ 404 Not Found
  + Check server log. Check routes.
+ 500 Internal
  + Check server log. Check params. Check controller.
  + Maybe coming from your database (missing validations)

---

## Questions?

---

## Thank you!