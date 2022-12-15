## W11D3 FSP: Features 

---

## Main Points
- How to set up a repo and include the features
- Everyone's repo should be, on the top level, a rails app.  Your rails app should not be under a directory.

---

## MVP (Minimum Viable Product)

+ The Features of your project should be a full-stack app
  + Hosting
  + User Authentication
  + Production README
  + 4 others from the Feature list (total of 7)
---

### Feature List
+ The order you plan on implementing your features 
  - with detailed sub-points!
+ Include expected time to implement. 
  - Be generous with the time estimates!
+ One feature must be a full CRUD cycle
+ 2 days for major features (posts, comments, users, etc)
+ 1 day for minor features (likes, follows, profiles, etc)
+ Include bonus (stretch) features that you will implement given enough time
---

### Repo Wiki setup and Feature Demo
+ [BlueBird Sample Wiki](https://github.com/appacademy/bluebird/wiki)

---

### Due Date
Thursday W11D4
* github repo 
* add PA as collaborator
* Feature list 

---

### Questions

---


# FSP: Database Schema
---

## What information 
1. Tables
2. Names of Columns and data types 
3. Validations and indices
4. Standard vs. Joins Tables

---

## Style
- schema is written in a table format
- table name's are `back_ticked`
- table header column names are **bolded**
- columns names are lowercased and snaked_cased and back_ticked

---

## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique

---

## Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a main page
- Create schema and feature pages
- Paste in your markdown

---

## Schema Demo
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)
- [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## One Last Tip
### ActiveStorage is coming
- No image_urls saved in database
- But we do need them on the frontend(more on that later)
---

## Due Friday W11D5:
- Schema tables written in markdown (use editor!)
- uploaded to your project repo's wiki page
- [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)

---