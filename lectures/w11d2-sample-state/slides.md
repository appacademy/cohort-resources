## W11D2 FSP: Normalizing State Shape 

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

# Summary for Normalizing State
+ Prevents repeated information/objects in our frontend state
+ Makes updating the state simpler and more efficient in our reducers.
+ Can prevent unnecessary re-renders of information in other components.

---

# Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a main page
- Create a state shape page
- Paste in your markdown

---

# Due Dates
* State Shape: W11D3

--- 

# Helpful Resources
* [full-stack-design-docs-example](https://github.com/appacademy/cohort-resources/tree/master/study_guides/full_stack_project/full_stack_project_wiki_example)
* [bluebird-wiki-example](https://github.com/appacademy/bluebird/wiki)
* [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)
* [normalized-state-shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape#:~:text=Note%20that%20a%20normalized%20state,passing%20all%20that%20data%20downwards.)

---




