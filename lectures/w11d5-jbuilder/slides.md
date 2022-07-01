# W11D5
# Normalized State w/ Jbuilder

---

## Agenda

+ Today's Material
	+ Review Tea Shop Demo
  + Using Jbuilder
  + Normalizing State Shape
+ Kahoot
+ Common Bugs

Note:
properly mapping associations between data


---

## Why Jbuilder?

+ sometimes we want to send a lot of complex information from our backend
+ `render json: modelname` only sends a limited amount of info
+ we can create files that will allow us to send more information, and structure it differently if we want

---
## example non-jbuilder response

+ `render json: video`

```
{
    "id": 1,
    "title": "Ping Pong Championship 2022",
    "description": "True masters of their craft battle it out in an all or nothing, winner takes all, ping pong grudge match for the ages",
    "length": 10000,
    "user_id": 55,
    "created_at": "2022-06-09T17:04:31.509Z",
    "updated_at": "2022-06-09T17:04:31.509Z"
}
```

---

## example jbuilder response

+ `render :show`
```
{
  "video": {
    "id": 1,
    "title": "Ping Pong Championship 2022",
    "description": "True masters of their craft battle it out in an all or nothing, winner takes all, ping pong grudge match for the ages",
    "length": 10000,
    "user_id": 55,
    "created_at": "2022-06-09T17:04:31.509Z",
    "username": "pingpoggers",
    "videoUrl": "...",
    "numLikes": 9103802
  },
  "comments": {
    1: {
      "id": 1,
      "body": "Best video ever 10/10",
      "username": "beverageEnjoyer65",
      "numLikes": 2
    },
    2: {
      "id": 2,
      "body": "This channel has really gone downhill, bad content 2/10"
      "username": "Bob Blamberson"
      "numLikes": 44
    }
  },
  "likes": ...
}
```

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
{ '10' : { "name": "Phil" } }
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

## Code Demo Part 1

---
## Normalized State Shape

+ The way you organize your store in Redux changes the way you access data later on in your components and reducers. 
+ If you don't organize your store well, you will end up doing more work.


---

## What is normalization?

---

## Bad State

```js
[
  {
    id : 1,
    author : { id: 1, username : "user1", name : "User 1" },
    title : "......",
    videoUrl: ".....",
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
  video : {
    1 : {
      id : 1,
      authorId : 1,
      title : "......",
      commentIds : [1, 2],
      videoUrl: "....."
    }
  },
  comments : {
    1 : {
      id : 1,
      authorId : 2,
      body : "",
    },
    2 : {
      id : 2,
      authorId : 3,
      body : "this is an example comment just to make the styling consistent on the slides",
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

Normalization refers to transforming the schema of a database to remove duplicate data. The biggest advantage of this is having a single point of truth, meaning there is only one place in the database that contains the true value of some piece of information.


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
* Since each data type is separated, an update like changing the text of a comment would only require new copies of the "comments" portion of the tree. This will generally mean fewer portions of the UI that need to update because their data has changed. In contrast, updating a comment in the original nested shape would have required updating the comment object, the parent post object, the array of all post objects, and likely have caused all of the Post components and Comment components in the UI to re-render themselves.


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
      username : "mikesicle",
    },
    2 : {
      id: 2,
      username : "papi",
    },
    3 : {
      id: 3,
      username : "taytay"
    }
  }
}
```

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
1) Check the console output
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

---



---
## Thank you!