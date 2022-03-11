# Normalized State w/ Jbuilder

---

## Agenda

+ Today's Material
  + Using Jbuilder
  + Normalizing State Shape
  + Common Bugs
+ Kahoot


Note:
properly mapping associations between data


---

## Learning Goals

+ Understand Jbuilder and how it helps sculpt our backend responses
+ Understand the purpose of normalizing state shape

---

## Jbuilder Basics

+ `Jbuilder` is a simple DSL tool to declare JSON structures 
  + Will help us sculpt response objects
+ This will replace the `render json: variable` of a controller's action
  + Instead, we will be rendering a `.json.jbuilder` file

Note:
to curate normalized JSON response from server

---

## Jbuilder Common Methods

+ `extract!`
+ `set!`
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
{ '10' : { "name": "Phil" } }
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

## Code Demo Part 1 - Refactor Existing Code to use Jbuilder

---

#### The way you organize your store in Redux changes the way you access data later on in your components and reducers. If you don't organize your store well, you end up doing more work.

Note: 
Using Redux to manage the entire state of your app is one thing. But making sure the structure of your state is optimal so that your code is maintainable and efficient is an entirely new ball game!
Managing the state shape of your app is absolutely fundamental. As your app grows, if your state shape is not well organized, managing it can quickly become messy and even slow down your app’s responsiveness.

A state shape should be a representation of facts. If there’s more than one way to extract a single fact, then there’s a redundancy in it. Every redundancy can cause different anomalies in the data, which in turn cause bugs in the application. To avoid that, there’s a process called normalization, which involves following sets of rules to restructure the database to remove redundancies without losing the original facts. 

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
Note:

* When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately.
* Nested data means that the corresponding reducer logic has to be more nested and therefore more complex. In particular, trying to update a deeply nested field can become very complicated very fast.
* We might have to update the same piece of data in several locations.
* The redux store is immutable, meaning that every time we make a change to this nested data structure, all ancestors in the state would also have to be updated.
    * This would make totally unrelated UI components re-render unnecessarily.
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
Note:

Normalization refers to transforming the schema of a database to remove duplicate data. The biggest advantage of this is having a single point of truth, meaning there is only one place in the database that contains the true value of some piece of information.


---

![drake-yah](https://img2.thejournal.ie/answer/56054/rectangle/?width=260&version=53090)

---

## Why Normalize State Shape
* Duplicated data is hard to manage
* Given an item's ID, we can access it instantaneously 
  * Think back to Big O day
* Avoid complex logic in reducers to handle deeply nested objects
* Avoid unnecessary re-renders of connected components 


  [Source](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)
  
Note:

* Because each item is only defined in one place, we don't have to try to make changes in multiple places if that item is updated.
* The logic for retrieving or updating a given item is now fairly simple and consistent. Given an item's type and its ID, we can directly look it up in a couple simple steps, without having to dig through other objects to find it.
* The reducer logic doesn't have to deal with deep levels of nesting, so it will probably be much simpler.
* Since each data type is separated, an update like changing the text of a comment would only require new copies of the "comments" portion of the tree. This will generally mean fewer portions of the UI that need to update because their data has changed. In contrast, updating a comment in the original nested shape would have required updating the comment object, the parent post object, the array of all post objects, and likely have caused all of the Post components and Comment components in the UI to re-render themselves.


---

### When you realize your state shape is bad

![sad-panda](https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif)

### 2 days before your project is due

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

## Code Demo Part 2 - Normalized State with Associated Data

---
![goal](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/W11D5-jbuilder/past_lectures/assets/finished-product.png?token=GHSAT0AAAAAABQN6MAMAGOXOVX2S2JY3MNCYRU3QOQ)

---

## State Shape

```js
{
  teas: {
    1 : {
      id : 1,
      flavor : "Green",
      price : 2,
      description: 'Light and airy and ...',
      transactionIds : [1, 2] // teas have many transactions
    }
  },
 transactions : {
    1 : {
      id : 1,
      quantity: 1,
      createdAt: "2020-02-02T00...",
      userId : "3"
    },
    2 : {
      id : 2,
      quantity: 4,
      userId : 2
    },
  },
  users : {
    1 : {
      id: 1,
      username : "RoRo",
    },
    2 : {
      id: 2,
      username : "MishMosh",
    },
    3 : {
      id: 3,
      username : "JenKen"
    }
  }
}
```

Note: Switch to code demo after this slide

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

Note:

While there is no single rule for exactly how those different types of data should be organized, one common pattern is to put the relational "tables" under a common parent key, such as "entities".

---

## When you hit a bug

1) Refresh again
1) Check if webpack is running
1) Check webpack's output
1) Check rails server logs

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

Note:

+ View: Can't read property *x* of undefined (need default state in reducer)

---
## Thank you!