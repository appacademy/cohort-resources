# W5D2
### Introduction to SQL



---

### Learning Goals

- Understand why we need databases
- Explain "Relational DataBase Management System"
- Be able to access data in a database and perform basic operations on the data



---

#### How do websites store information?




---
### Answer: Databases!
- There are different models of databases
	- They differ in how they store data and how that data can therefore be accessed
- We're going to use a relational database model. 'Relational' refers to the use of tables to store and organize data
  - Each table is referred to as a "relation", as it is a collection of *related* data entries
- We can imagine a relational database as an excel spreadsheet with a collection of related tables
	- [Sample Database](https://docs.google.com/spreadsheets/d/11Gwdlqhln0PIX2KDXnr2UozAnRog2GverwyjPIXHN2o/edit#gid=)
  


---

### There are two parts to storing and accessing data:

1. 	DataBase Management System
  	- An application that stores data at scale and can be queried for data

2. The Querying Language
 	 - The language we use to interact with the database management system to create our database, insert data, and query (i.e. ask) it for data




---

### "Relational DataBase Management System" (RDBMS)
- An application that stores data at scale and organizes the data in *tables*

We will be using:
- PostgreSQL, aka Postgres (open source)
  - We'll be using this for the next two days, and for most projects
- SQLite (open source)
  - Thursday's project uses this DB



---

## SQL
### The way we communicate with our database

* SQL stands for "Structured Query Language"

* It's a domain-specific language (**DSL**) for _relational_ databases (other DSLs you've encountered: HTML, RSpec)

* Uses declarative programming

* SQL is extremely popular: https://insights.stackoverflow.com/survey/2019#technology



---

### PostgreSQL Shell Commands

- `$ psql`
- `CREATE DATABASE lecture;`
- (`$ cat setup_lecture_demo.sql | psql lecture`)
- `$ psql lecture`
- `\d` - list tables
- `\d table` - show schema for table
- `\?` to list meta commands
- end queries with a `;`



---

### The basics of SQL queries

* `SELECT` : choose which columns to extract data from
* `FROM`: specifies the _relation_ (table) you're getting data from
* `WHERE`/`WHERE NOT`: filters the data according to a logical expression
  - `=`, `>=`, `<=`, `>`, `<`, `<>`/`!=`
  - `IN`, `BETWEEN`, `LIKE`, (`%`)
  - `AND`, `OR`
* Use `IS NULL` and `IS NOT NULL` to check for null values

#### Query: Get the names of all App Academy instructors



---

Query: Get the names of all App Academy instructors.

```sql
SELECT
  app_academy.name
FROM
  app_academy;
```


---

#### Query: Get the possessions where the cost is greater than a 1000 dollars?

---

```sql
SELECT 
 * 
FROM 
 possessions 
WHERE 
 cost > 1000;
 ```

---

### Query: What if I wanted all instructors whose name start with "R"?

---

Query: Get the names of all App Academy instructors whose name starts with "A"

```sql
SELECT
  name
FROM
  app_academy
WHERE
  name 
LIKE 
 'R%';
```



---

### Common SQL Filters and Commands

* `ORDER BY`: Sorts results based on a specific column
  - `ASC` or `DESC`
  - `ASC` is default
* `LIMIT`: how many rows you want in the result
* `OFFSET`: how many rows you want to skip from the top
* `DISTINCT`: De-duplicates data in a result (like `Array#uniq`)
  	- `SELECT DISTINCT name, type`
  	- `SELECT COUNT(DISTINCT name)`





---

#### Query: Get the names of all the possessions without any duplicates.

---

Query: Get the distinct names of possessions
```sql
SELECT
  DISTINCT possessions.name
FROM
  possessions;
```



---

### Query Pop Quiz: Get the name & cost of the second most expensive possession whose name has at least two words.

---

Query: Get the name & cost of the second most expensive possession whose name has at least two words.

```sql
SELECT
  name, cost
FROM
  possessions
WHERE
  name LIKE '% %'
ORDER BY
  cost DESC
LIMIT
  1
OFFSET
  1;
```
---

#### Query: Get the names of app academy staff who do not have a pod leader.

---
Query: Get all of the app academy instructors who do not have a pod leader

```sql
SELECT
  name
FROM
  app_academy
WHERE
  pod_leader_id IS NULL;
```
---

# 5 minute break

---

## Can I write SQL code in my Ruby file ? 


---

### How can I perform calculations on my data?




---

## Using Aggregate Functions

- Aggregate functions combine data from a column into a single value
* You should _always_ use an alias with aggregate functions to make for clearer results
* `COUNT`, `SUM`, `AVG`, `MIN`/`MAX`, [and
more](http://www.postgresql.org/docs/9.4/static/functions-aggregate.html)

### Query: What is the average cost of all possessions?


---

#### Query: Get the average cost of all possessions

---
Query: Get the average cost of all possessions
```sql
SELECT
  AVG(cost) AS avg_cost
FROM
  possessions;
```

Note: When aliasing, 'AS' is optional.

---
#### Query: Get the total cost of all possessions

---
Query: Get the total cost of all possessions
```sql
SELECT
  SUM(cost) AS total_cost
FROM
  possessions;
```
---

#### Query: Count the total number of possessions

---
Query: Count the total number of possessions
```sql
SELECT
  COUNT(*) AS num_possessions
FROM
  possessions;
```

---

### Query Pop Quiz: Count the types of possessions

---
Query: Count the distinct types of possessions
```sql
SELECT
  COUNT(DISTINCT type) AS num_types
FROM
  possessions;
```

---
#### Query: Get the cost of the least expensive item

---
Query: Get the cost of the least expensive item
```sql
SELECT
  MIN(cost) AS least_expensive
FROM
  possessions;
```
---

### What if I want to perform operations on a group of rows?
* Ex: How many items are there for each *type* of possession?




---

### GROUP BY

- `GROUP BY` groups rows with matching values for given column
  - Collapses each group of rows into a single row
- Aggregate functions in `SELECT` will apply to the individual groups, not the whole rows



---

#### Query: Show each type of possession using `GROUP BY`

---
Query: Show each type of possession using `GROUP BY`

```sql
SELECT
  type
FROM
  possessions
GROUP BY
  type;
```

---

#### Query Pop Quiz: For each type of possession, show the type and number of items

---
Query: For each type of possession, show the type and number of items

```sql
SELECT
  type, COUNT(*) AS num_items
FROM
  possessions
GROUP BY
  type;
```



---

#### Query: For each type of possession with more than 5 items, show the type and number of each
---
Query: For each type of possession with more than 5 items, show the type and count of each

```sql
SELECT
  type, COUNT(*) AS num_items
FROM
  possessions
GROUP BY
  type
HAVING
  COUNT(*) > 5;
```



---

### WHERE vs HAVING

- `HAVING` works like `WHERE`, but...
  - `WHERE` gets evaluated **_before_** `GROUP BY`.
  - `HAVING` gets evaluated **_after_** `GROUP BY`.

---

### WHERE vs HAVING

- Since the `WHERE` clause gets executed before the `GROUP BY` clause, grouped entries cannot be filtered by `WHERE`
  - `HAVING` is same as the `WHERE` clause but is applied on grouped entries
  - **Aggregate functions** are not allowed in `WHERE`. You must use **aggregate functions** in `HAVING`
  WHY?
  


---

### Order of operation execution in SQL

1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. SELECT
7. ORDER BY
8. LIMIT / OFFSET

### (Why can't we use aliased names in HAVING?)



---

# 5 minute break




---

### Can I use the result of a query in a different query?
* Ex: What is the most common possession -- and which ones cost more than $1,000?



---

### Answer: Yes -- Use a subquery!
Sometimes it's useful to use the result of a query inside another query. This is a _Subquery_.

- Can be used in `FROM` clause (needs to be aliased) 
- Can be used in `WHERE` clause:
  - `WHERE IN` _Subquery_
  - `WHERE NOT IN` _Subquery_
- When to use a subquery:
	- You'll want to use a subquery if your query follows the logic of "Get me this data A from dataset B"



---

#### Query: Of the most common item, list the ones that cost over $1000

---

```sql
SELECT
  *
FROM
  possessions
WHERE
  name IN (
    SELECT
      name
    FROM
      possessions
    GROUP BY
      name
    ORDER BY
      COUNT(*) DESC
    LIMIT
      1
  ) AND cost > 1000;
```

---

### Subquery Pop Quiz

Query: How many types of possessions have a total cost over $1000?

(Hint: use _FROM_ instead of _WHERE_)
---

Query: How many types of possessions have a total cost over $1000?

```sql
SELECT
  COUNT(*) AS num_types
FROM (
  SELECT
    type
  FROM
    possessions
  GROUP BY
    type
  HAVING
    SUM(cost) > 1000
  ) AS pricey_possessions;
```
---
#### Query: Who is the owner of the most expensive item?
---

Query: Who is the owner of the most expensive item?

```sql
SELECT
  name
FROM
  app_academy
WHERE
  id = (
  SELECT
    owner_id
  FROM
    possessions
  ORDER BY
    cost DESC
  LIMIT
    1);
```


---

### JOINS

- Combine data from multiple tables into one _relation_ using a JOIN
- Types of relationships between tables:
	- One-to-many (hierarchical)
  		- Ex: Each TA has one pod leader, and each pod-leader has many TAs
  - Many-to-many (horizontal)
  	- Ex: Each a/A TA has many hack reactor friends, and each hack reactor TA has many a/A friends
    


---

### The 3 Most Common Types of JOINs

- `INNER JOIN`
  - returns only rows from `table1` and `table2` that match each other. This is the default.
- `LEFT OUTER JOIN` - same as `LEFT JOIN`
  - returns all rows in `table1`, whether or not they match `table2`. 
- `FULL OUTER JOIN`
  - returns all rows in `table1` and `table2`, whether or not their data matches up

---

### Joining one-to-many data
#### Query: Show the name of all of the possessions and their owner

---

#### Query: Show the name of all of the possessions and their owner

```sql
SELECT
  app_academy.name AS owner_name,
  possessions.name AS possession_name
FROM
  app_academy
JOIN possessions
    ON app_academy.id = possessions.owner_id;
    
```

---

#### Query: Find the _total number_ of possessions owned by each person

---

#### Query: Find the _total number_ of possessions owned by each person

```sql
SELECT
  app_academy.name AS owner_name,
  COUNT(*) AS total_possessions
FROM
  app_academy
JOIN possessions
    ON app_academy.id = possessions.owner_id
GROUP BY
  app_academy.name;
```

---
### Let's now join many-to-many data
#### Query: Get all the friendships between app academy and hack reactor people


---

#### Query: Get all the friendships between app academy and hack reactor people

```sql
SELECT
  *
FROM
  app_academy
JOIN friendships
    ON app_academy.id = friendships.aa_id
JOIN hack_reactor
    ON hack_reactor.id = friendships.hr_id;
```
---

### What's the difference between a subquery and a join?

- When you have lots of data across many tables
- Subqueries use less memory than joins
- Subqueries use more CPU than joins (CPU is usually the bottleneck)
- In practice, this can differ between SQL engines


---
### What is a self-join?


---

### Answer
- Joins a table back against itself
- You must alias the table names
- Use descriptive aliases

---

#### Query: Get all of the app academy instructors who are also pod leaders

---

#### Query: Get all of the app academy instructors who are also pod leaders

```sql
SELECT
  DISTINCT(pod_leaders.name)
FROM
  app_academy AS instructors
  JOIN app_academy AS pod_leaders
  ON instructors.pod_leader_id = pod_leaders.id;
```



---

## Questions?

---

### [KAHOOT](https://play.kahoot.it/#/?quizId=85da63ee-4075-42f8-94b3-2cd88de6915a)

---

### Review
1. How can we store information?
2. How can we access the data?
3. What are the basics of SQL queries?
4. What if I want to do calculations on my data?
5. What if I want to group my data?
6. Can I use the result of a query in a different query?
7. How can I query relationships across tables?
8. What is a self-join?

---

## Thank you!
