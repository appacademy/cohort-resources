## W11D2 FSP: Normalizing State Shape 

---

## Main Points: 
- Top-level state shape - entities, ui, session, errors
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
 - All keys within the values in the state are accessible in the schema (i.e. state values represent database table data)
 - How to render your Sample State Shape
   - tripple backticks followed by js (signifing javascript as the language to be read)
   - your sample state object ```{ entities: {...}, session: {...},  ...etc}```
   - a closing set of tripple backticks
   - This will display the state as a code block instead of a giant line of text

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

## Is this okay? (Example 1)
```js
entities: {
  users: [
    {
      id: 3,
      name: 'Andy',
    },
    {
      id: 4,
      name: 'Rose',
    }
  ],
  posts: [
    {
      id: 10,
      name: 'Post 1',
    },
    {
      id: 11,
      name: 'Post 2',
    }
  ]
}
```
---
# No
---
## Is this okay? (Example 2)
```js
{
entities: {
  users: {
    3: {
      id: 3,
      name: 'Andy',
      authoredPosts: [
        {
          id: 1,
          title: 'post 1',
          authorId: 3
        },
        {
          id: 2,
          title: 'post 2',
          authorId: 3
        }
      ]
      }
  },
  posts: {
    1: {
      id: 1,
      title: 'post 1',
      authorId: 3
    },
    2: {
      id: 2,
      title: 'post 2',
      authorId: 3
    }
  }
}
}

```
---
# No
---
## What about this? (Example 3)

```js
{
entities: {
  users: {
    3: {
      id: 3,
      name: 'Andy',
      authoredPosts: [1, 2]
      }
  },
  posts: {
    1: {
      id: 1,
      title: 'post 1',
      authorId: 3
    },
    2: {
      id: 2,
      title: 'post 2',
      authorId: 3
    }
  }
}
}
```
---
# Sort Of.
###### (But you have two sources of truth for posts)
---
# Pretty good:
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
  }
}
}
```
---
# Joins Tables Get Their Own Slice of State (Frontend vs Backend State)
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

# Summary for Normalizing State
+ Prevents repeated information/objects in our frontend state
+ Makes updating the state simpler and more efficient in our reducers.
+ Can prevent unnecessary re-renders of information in other components.

---

# Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a new page called State Shape
- Type and or paste in your markdown

---

# Due Dates
* State Shape: Monday at 9am (W12D1)
* REMINDER: TAs will not provide help on full stack projects until the design documents/proposal are finished!

---

# Helpful Resources
* [full-stack-design-docs-example](https://github.com/appacademy/cohort-resources/tree/master/study_guides/full_stack_project/full_stack_project_wiki_example)
* [bluebird-wiki-example](https://github.com/appacademy/bluebird/wiki)
* [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)
* [normalized-state-shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape#:~:text=Note%20that%20a%20normalized%20state,passing%20all%20that%20data%20downwards.)






