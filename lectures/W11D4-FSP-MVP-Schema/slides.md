# W11D4 - MVPs and Database Schema 

---

## Main Points
- How to set up a repo's Wiki
  - How to include the MVP List
  - How to include Database Schema
- NOTE: Everyone's repo should be, on the top level, a rails app.  Your rails app should not be under a directory.

---

### MVPs

---

### MVPs (Minimum Viable Products)

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

### Database Schema
---

### What information 
1. Tables
2. Names of Columns and data types 
3. Validations and indices
4. Standard vs. Joins Tables

---

### Style (USE THIS STYLE GUIDE)
- schema is written in a table format
- table name's are `back_ticked`
- table header column names are **bolded**
- columns names are lowercased and snaked_cased and back_ticked

---

### `users`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |

---

### Where does all this go?
- In the repo wiki for your FSP
- Go to Wiki tab
- Create a main page
- Create schema and mvp pages
- Type and/or paste in your markdown for each page
- link each page on the home page
  - ```[Page Name](page url)```

---

## One Last Tip
### ActiveStorage is coming
- No image_urls saved in database
- But we do need them on the frontend

---

## Wiki pages Due Friday W11D5:
- MVP List (writen in markdown and stylized)
- Database Schema (written in markdown and stylized)

---

### Useful Resources (USE THESE RESOURCES)

[BlueBird Example Wiki](https://github.com/appacademy/bluebird/wiki)
- Use this as a template when setting up your own wiki

[Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)
- Use this to set up your markdown tables

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- Use this for markdown syntax reference 