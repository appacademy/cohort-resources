
# FSP: Database Schema
---

## What information 
1. Tables
1. Names of Columns
1. Validations and indices
1. Standard vs. Joins Tables
---

## Style
- schema is written in a table format
- table name's are `back_ticked`
- table header column names are **bolded**
- columns names are lowercased and snaked_cased and back_ticked

---

- schema tables written in markdown
- uploaded to your project repo's wiki page
## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique

---

# Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a schema page
- Paste in your markdown

---
# One Last Tip
### ActiveStorage is coming
- No image_urls saved in database
- But we do need them on the frontend
---

## FSP: Normalizing State Shape 

![Alt_Text](https://media.giphy.com/media/xUOxfpn7hRBX3tE2Hu/giphy.gif)

---

## Main Points: 
- Top-level estate shape - entities, ui, session, errors
- Proper way to store relational data
---
## Top Level State Shape
```js
{
	entities: {
		users: {},
		posts: {}
	},
	session: {
		currentUser: 1
	},
	ui: {
		modalOpen: true
	},
	errors: {
		userErrors: [],
		sessionErrors: [],
		postErrors: []
	}
}
```
- All relational data nested under entities
- Changes to session, ui,  errors, etc are handled by their own reducers/ slice of state

---
# Style
 - State shape is flat!
 - State's keys are camelCased
 - All keys within the values in the state are accessible in the schema

 - Sample state is rendered with triple backticks, and the language ```javascript...```). This will display the state as a code block instead of a giant line of text

---
## Storing relational data
- Store entities by their ID
- Single source of truth for each entity
	- No duplicated data
  - No nested data
  - State shape should closely resemble schema
- Joins tables get their own slice of state
- Redux docs for normalization tips 👍
  * [normalized state shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape#:~:text=Note%20that%20a%20normalized%20state,passing%20all%20that%20data%20downwards.)
---
# Joins Tables Get Their Own Slice of State
### But Why???
- Recommended by the [Redux Docs][redux]
- "Any table on the backend should have a slice on the frontend"
- Avoid multiple sources of truth for relational data

[redux]:https://redux.js.org/recipes/structuringreducers/normalizingstateshape

---
```js
{
entities: {
  users: {
    3: {
      id: 3,
      name: 'Andy',
      }
  },
  posts: {
    1: {
      id: 1,
      title: 'post 1',
      authorId: 3,
    },
    2: {
      id: 2,
      title: 'post 2',
      authorId: 3,
    }
  },
  postLikes: {
  	1: {
    	id: 1,
      userId: 3,
      postId: 4
    }
  }
}
}
```
---

# Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a sample state page
- Paste in your markdown

---

# Due Dates
* Schema: W11D3
* State Shape: W11D3
* TAs will not provide help on full stack projects until the design documents/proposal are finished!

---

# Fin
![Alt_Text](https://media.giphy.com/media/l4pTjOu0NsrLApt0Q/giphy.gif)


