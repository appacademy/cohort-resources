# Normalized State w/ Jbuilder

---

## Agenda

+ Today's Material
  + Using Jbuilder
  + Normalizing State Shape
  + Common Bugs
+ Kahoot


---

## Jbuilder Basics

+ `Jbuilder` is a simple DSL tool to declare JSON structures 
  + Will help us sculpt response objects
+ This will replace the `render json: variable` of a controller's action
  + Instead, we will be rendering a `.json.jbuilder` file

Note:
* DSL: domain specific language

---

## Code Demo Part 1 - Refactor Existing Code to use Jbuilder

---

## Jbuilder Common Methods

+ `extract!`
+ `set!`
+ `array!`
+ `partial!`

Fun Fact:
"!" means its a json method, not a key of a pojo.

---

## regular key

Use `json.variable` to create a key named `variable`:

```ruby
# @pup = {id: 99, name: 'Wayne', age: 59}

json.pup do
  json.id @pup.id
  json.name @pup.name
  json.age @pup.age
end
```
```json
{"pup": {"id": 99, "name": "Wayne", "age": 59}}
```

---

## `extract!`

`extract!` is best when you want the object's key to match the column name.

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
{ '10' : { "name": "Phil" } }
```

---

## `array!`

You can also extract attributes from array directly.


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

Note:

```ruby
#pure ruby
json.pup_ids @puppinos.map(&:name)
```

---

## `partial!`

```rb
#partial in `api/puppers/_pupper.json.jbuilder`

json.partial! 'pupper', pupper: @pupper
```

```json
{"name": "Phil", "age": "2"}
```

---

#### The way you organize your store in Redux changes the way you access data later on in your components and reducers. 
#### If you don't organize your store well, you will end up doing more work.


---

## What is normalization?

---

## Example State

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

![drake-nah](https://img2.thejournal.ie/answer/56053/rectangle/?width=260&version=53089)

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

![drake-yah](https://img2.thejournal.ie/answer/56054/rectangle/?width=260&version=53090)

---

## Why Normalize State Shape
* Duplicated data is hard to manage 
* Avoid complex logic in reducers to handle deeply nested objects
* Avoid unnecessary re-renders of connected components 


  [Source](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)
  

---

### When you realize your state shape is bad

![sad-panda](https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif)

### 2 hours before your project is due

---

## How to Normalize State Shape

+ Every table / model gets its own slice of state
+ Every row has a key (ID) and a value (the row as an object)
+ References to other models (associations) should be achieved by storing IDs in an array.

---

## Normalizing associated data

* Data with `belongs_to` relationship stores ID of associated data
* Data with `has_many` relationship stores array of IDs of associated data
* Joins tables occupy their own slice of state

---

## Code Demo Part 2 - Normalized State with Associated Data

---

## Wireframe of Finished Product

---

## State Shape

```js
{
  teas : {
    1 : {
      id : 1,
      flavor : "Green",
      amount : 1.75,
      description: "......"
      transactionIds : [1, 2] // teas have many transactions
    }
  },
  transactions : {
    1 : {
      id : 1,
      quantity: 2,
      teaId : 1, // transactions belong to a tea
      customer : "Merman"
    },
    2 : {
      id : 2,
      quantity: 1,
      teaId : 3, // transactions belong to a tea
      customer : "MishMosh"
    },
  },
  users : {
    1 : {
      id: 1,
      username : "Merman",
    },
    2 : {
      id: 2,
      username : "MishMosh",
    },
    3 : {
      id: 3,
      username : "JenKen"
    }
  },
  likes : { // joins table occupies own slice of state
    1 : {
      id: 1,
      teaId: 2,
      userId: 1
    },
    2 : {
      id: 2,
      teaId: 1,
      userId: 2
    },
    3 : {
      id: 3,
      teaId: 3,
      userId: 2
    }
  }
}
```

---

# Jbuilder Review


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

## [Kahoot!](https://play.kahoot.it/v2/?quizId=e5e638fb-5857-4e04-9774-0906dfcaf5ce)

---

## Future State Shape

```js
{
  entities: {
    stocks: {
      1: {
        id: 1,
        name: "Starbucks",
        ticker: "SBUX",
        price: 52.00
      },
      2: {
        id: 2,
        name: "Twitter",
        ticker: "TWTR",
        price: 31.96
      },
      3: {
        id: 3,
        name: "Microsoft",
        ticker: "MSFT",
        price: 106.43
      },
    },
    users: {
      1: {
        id: 1,
        username: "Warren Buffett",
        imgUrl: "https://s3.amazonaws.com/easytrade/filename"
      },
      2: {
        id: 2,
        username: "Jordan Belfort",
        imgUrl: "https://s3.amazonaws.com/easytrade/filename"
      }
    },
    watches: { // joins table between stocks and users
      1: {
        id: 1,
        stockId: 3,
        userId: 1
      },
      2: {
        id: 2,
        stockId: 1,
        userId: 3
      },
      3: {
        id: 3,
        stockId: 3,
        userId: 2
      }
    },
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    tradeForm: ["Not enough buying power"],
  },
  session: { currentUserId: 1 }
}
```

---

## Common Debugging Techniques

---

## When you hit a bug

1) Refresh again
2) Check webpack's output
3) Check for errors in chrome console
4) Check rails server logs

---

## Backend Errors

+ 404 Not Found
  + Check server log. Check routes.
+ 500 Internal
  + Check server log. Check params. Check controller.
  + Maybe coming from your database (missing validations)

---

## Frontend Errors

+ Importing (curly braces or no curly braces?)
+ Forgetting to export JSX components
+ Render errors
	+ Use the debugger!

