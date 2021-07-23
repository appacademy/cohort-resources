# W11D4 FSP: Database Schema
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

## Due Friday W11D5:
- Schema tables written in markdown (use editor!)
- uploaded to your project repo's wiki page
- [markdown-table-generator](https://www.tablesgenerator.com/markdown_tables)

---