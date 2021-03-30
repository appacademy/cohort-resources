## W11D1 MVPs + Schema

---

## Main Points
- How to set up a repo and include the mvps + Schema
- Everyone's repo should be, on the top level, a rails app.  Your rails app should not be under a directory.
- Make your advisor a collaborator 

---

## MVP (Minimum Viable Product)

+ The MVPs of your project should be a full-stack app
  + Hosting on Heroku
  + User Authentication
  + Production README
  + 4 others from the MVP list (total of 7)
  
---

### MVP List
+ The order you plan on implementing your features 
  - with detailed sub-points!
+ Include expected time to implement. 
  - Be generous with the time estimates!
+ One feature must be a full CRUD cycle
+ 2 days for major features (posts, comments, users, etc)
+ 1 day for minor features (likes, follows, profiles, etc)
+ Include bonus (stretch) features that you will implement given enough time

---

# FSP: Database Schema

---

## What information 
1. Tables
2. Names of Columns and data types 
3. Validations and indices

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

# Where does this go?
- In the repo for your FSP
- Go to Wiki tab
- Create a main page
- Create schema and mvp pages
- Paste in your markdown

---

# One Last Tip
### ActiveStorage is coming
- No image_urls saved in database
- But we do need them on the frontend

---

## Due Tuesday W11D2:
- Github Repo created
- add PA as collaborator
- MVP List
- Schema tables written in markdown (use editor!)
- uploaded to your project repo's wiki page
- [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)
