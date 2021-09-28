# W5D2
### Introduction to SQL
​
---
​
### Learning Goals
​
- Understand why we need databases
- Know what a "Relational DataBase Management System" is
- Be able to access data in a database and perform basic operations on the data
​
---
​
### Agenda
​
- Intro to Databases
- SQL and PostgreSQL
- Basic SQL Filters
- Aggregate Functions
- Grouping Data
- Subqueries
- Joins
- Ruby Heredocs
- Kahoot! and Review
​
---
​
#### How do websites store information?
​
---
​
### Answer: Databases!
​
- There are different models of databases
	- They differ in how they store data and therefore how that data can be accessed
- We're going to use a relational database model. 'Relational' refers to the use of tables to store and organize data
  - Each table is referred to as a "relation", as it is a collection of *related* data entries
- We can imagine a relational database as an excel spreadsheet with a collection of related tables
	- [Sample Database](https://docs.google.com/spreadsheets/d/1LnU8_bGZw19YwZWSEyjkTuQqQyVpIKcy0pMCdnRnYQA/edit?usp=sharing)
​
---
​
### For our purposes, there are two parts to storing and accessing data:
​
1. 	DataBase Management System
  	- An application that stores data at scale and can be queried for data
​
2. The Querying Language
 	 - The language we use to interact with the database management system to create our database, insert data, and query (i.e. ask) it for data
​
---
​
### "Relational DataBase Management System" (RDBMS)
- An application that stores data at scale and organizes the data in *tables*
​
We will be using:
- PostgreSQL, aka Postgres (open source)
  - We'll be using this for the next two days, and for most projects
- SQLite (open source)
  - Thursday's project uses this
​
---
​
## SQL
### The way we communicate with our database
​
* SQL stands for "Structured Query Language"
	- previously spelled SEQUEL, which stood for "Structured English Query Language"
​
* It's a domain-specific language (**DSL**) for _relational_ databases (other DSLs you've encountered: HTML, RSpec)
​
* SQL is extremely popular: https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language
​
---
​
### What can SQL do?
​
- SQL can create new databases
- SQL can create new tables in a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can retrieve data from a database
​
---
​
### Column Types
​
Every column must have a data type specified. Some common types:
​
- `varchar`
- `boolean`
- `integer`
- `float`
- `date`
- [many, many
more](https://www.postgresql.org/docs/current/static/datatype.html#DATATYPE-TABLE)
​
---
​
### PostgreSQL Shell Commands
​
- `$ psql` - opens psql with your personal database
- `CREATE DATABASE myDatabase;`
- `DROP DATABASE myDatabase;`
- `\q` - close current database (must close before opening another)
- `$ psql myDatabase` - opens the DB named `myDatabase`
- `\d` - list tables
- `\d table` - show schema for table
- `\?` to list meta commands
- end queries with a `;`
​
---
​
### Let's take a look at our sample data and create our database
​
---
​
### The basics of SQL queries
​
* `SELECT` : choose which columns to extract data from (`*` for all)
* `FROM`: specifies the _relation_ (table) you're getting data from
* `WHERE`/`WHERE NOT`: filters the records according to a logical expression
  - `=`, `>=`, `<=`, `>`, `<`, `<>`/`!=`
  - `AND`, `OR`
  - `IN`, `BETWEEN`, `LIKE`, (`%`)
​
---
​
### Common SQL Filters and Commands
​
* `ORDER BY`: Sorts results based on a specific column
  - `ASC` or `DESC`
  - `ASC` is default
* `LIMIT`: how many rows you want in the result
* `OFFSET`: how many rows you want to skip from the top
* `DISTINCT`: De-duplicates data in a result (like `Array#uniq`)
  	- `SELECT DISTINCT name, type`
  	- `SELECT COUNT(DISTINCT name)`
​
---
​
### `NULL`
  - Comparisons to `NULL` don't work in SQL
​
  - `NULL` represents an unknown value
  	-	`NULL` is not a value, it is a non-value
​
  - Use `IS NULL` and `IS NOT NULL` to check for null values
​
---
​
## Demo Time
​
Challenges 1 - 6
​
---
​
# 5 minute break
​
---
​
### How can I perform calculations on my data?
* Ex: What is the average cost of all possessions?
​
---
​
## Using Aggregate Functions
​
* Aggregate functions combine multiple values from a column into a single value
* For now, must use in the SELECT clause
* You should _always_ use an alias with aggregate functions to make for clearer results
* `COUNT`, `SUM`, `AVG`, `MIN`/`MAX`, [and
more](http://www.postgresql.org/docs/9.4/static/functions-aggregate.html)
* Note that an aggregate function must be applied to a bunch of records, not a single record :)
​
---
​
## Demo Time!
​
Challenges 7 - 10
​
---
​
## 5 minute break!
​
---
​
### What if I want to operate on a subset of my data?
* Ex: How many items are there for each *type* of possession?
​
---
​
### GROUP BY
​
- `GROUP BY` groups rows with matching values for given column
  - Collapses each group of rows into a single row
- Any column we `SELECT` must be in our `GROUP BY`
- Aggregate functions in `SELECT` will apply to the individual groups, not the groups as a whole (`SELECT COUNT(*)` will return the count of each group, not how many groups there are!)
​
---
​
## Demo Time!
​
Challenges 11 - 12
​
---
​
### WHERE vs HAVING
​
- `HAVING` works like `WHERE`, but...
  - `WHERE` gets evaluated **_before_** `GROUP BY`.
  - `WHERE` filters **_rows_** of data.
  - `HAVING` gets evaluated **_after_** `GROUP BY`.
  - `HAVING` filters **_groups_** of data.
​
---
​
### WHERE vs HAVING
​
- Since the `WHERE` clause gets executed before the `GROUP BY` clause, grouped entries cannot be filtered by `WHERE`
  - `HAVING` is same as the `WHERE` clause but is applied on grouped entries
  - Allows us to use aggregate functions to **_filter groups_** of data!
  - Aggregate functions must be applied to groups of records, not single records!
​
---
​
### Order of operation execution in SQL
​
1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. SELECT
7. DISTINCT
8. ORDER BY
9. LIMIT / OFFSET
​
---
​
## Demo Time!
​
Challenge 13
​
---
​
# 5 minute break
​
---
​
### Can I use the result of a query in a different query?
* Ex: What is the most common possession -- and which ones cost more than $1,000?
---
​
### Answer: Yes -- Use a subquery!
Sometimes it's useful to use the result of a query inside another query. This is a _Subquery_.
​
- Most commonly used in the `WHERE` clause:
  - `WHERE IN` _Subquery_
  - `WHERE NOT IN` _Subquery_
- When to use a subquery:
	- You'll want to use a subquery if your query follows the logic of "Get me this data A, as long as it is in this dataset B"
​
---
​
## Demo Time!
​
Challenge 14
​
---
### Subqueries
- Can also be used in the `FROM` statement
- However, you *must* alias the subquery
- You have to name your subquery so you will be able to add further constraints on the results, otherwise your db will not know how to refer to the subquery
​
---
​
## Demo Time!
​
Challenges 15 - 16
​
---
​
### JOINS
​
- Combines data from multiple tables into _one_ relation
- Types of relationships between tables:
	- One-to-many (hierarchical)
  		- Ex: Each possession belongs to one owner, and each owner has many possessions
  - Many-to-many (horizontal)
  	- Ex: Each SF TA has many NY TA friends, and each NY TA has many SF TA friends
​
---
​
### The 3 Most Common Types of JOINs
​
- `INNER JOIN` - default
  - returns only rows from `table1` and `table2` that match each other. This is the default.
- `LEFT OUTER JOIN` - same as `LEFT JOIN`
  - returns all rows in `table1`, whether or not they match `table2`. Not supported by all engines.
- `FULL OUTER JOIN`
  - returns all rows in `table1` and `table2`, whether or not their data matches up
​
---
​
### When do we join tables rather than using a subquery?
​
- When you have lots of data across many tables
- Subqueries use less memory than joins
- Subqueries use more CPU than joins (CPU is usually the bottleneck)
- In practice, this can differ between SQL engines
​
​
---
​
## Demo Time!
​
Challenges 17 - 19
​
---
​
### What is a double join?
​
---
​
### Answer
- Joins three (or more) tables
- Usually utilizes a "joins" tables made just for this purpose
- Joins "through" - any of the three can be the left table
​
---
​
## Demo Time!
​
Challenge 20
​
---
​
### What is a self-join?
​
---
​
### Answer
- Joins a table back against itself
- You must alias the table names
- Use descriptive aliases
​
---
​
## Demo Time!
​
Challenge 21
​
---
​
### Today, you're going to be writing SQL code in a ruby file
​
* Write an "execute" function to handle DB connection
* Enter SQL queries into "heredocs" (multi-line strings)
* This is how you'll be writing SQL today (to run specs), but please also use the `psql` interface to debug and see what your queries return.
​
---
​
### Ruby heredoc demo
​
---
​
## Questions?
​
---
​
### [KAHOOT](https://play.kahoot.it/#/?quizId=85da63ee-4075-42f8-94b3-2cd88de6915a)
​
---
​
### Review
1. How can we store information?
2. How can we access the data?
3. What are the basics of SQL queries?
4. What if I want to do calculations on my data?
5. What if I want to group my data?
6. Can I use the result of a query in a different query?
7. How can I query relationships across tables?
8. What is a self-join?
​
---
