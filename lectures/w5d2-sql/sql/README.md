# Setup!

This lecture requires some setup to make sure your lecture is tailored to your city. You should look at the sample database found [here](https://docs.google.com/spreadsheets/d/11Gwdlqhln0PIX2KDXnr2UozAnRog2GverwyjPIXHN2o/edit#gid=0) and make sure the data there is accurate. Feel free to update instructors, friendships, or possessions. If you do change anything, you will also have to update `setup_lecture_db.sql` found in `demo/skeleton`. You should also test this file by running the `import_db.sh` file.

Addtionally, you should go through the challenges found in the demo and make sure they are related to your city. 

Note: A lot of the slides are very self explanatory, so a big portion of this lecture is just going through the bullet points and adding what you think is important. This is also a heavy demo lecture with a lot of student participation. You will most likely need to call on random people if you are not getting enough variety in your volunteers!

# W5D2
### Introduction to SQL ( talk about pronunciation and own experience)

* There will be designated times set aside for Q&A, so please hold your questions for those designated times. Write your questions down so you don't forget them!

* I know some of you may have experience with SQL, but this is an introductory lecture to SQL, so please hold any advanced questions or comments unless you think it will be helpful to SQL beginners.

* If you have a what-if question please hold those until break. We will be going through a lot more complex queries so those might answer your questions. 

* You will be writing your own queries where you'll have the chance to experiment which is where a lot of the learning will come from.

---

### Learning Goals

Understanding how RDBMS work will serve as a building block for the next few days when you learn more about Object Relational Mapping in the context of Active Record in Rails where data in our database can be represented as Ruby Objects.

---

#### How do websites store information?

Up until now, we haven't been dealing with too much data. If we have, we've typically stored that data in arrays or hashes, but that data hasn't persisted beyond the lifespan of a single class instance. The one counter example I can think of is Ghost, where you stored your dictionary in a txt file. For web development, we're going to need lots of data like that.

If we think about Facebook, for FB to be usable and interesting, it has to show us lots of information, like who our friends are, the posts that they made, who our friends are friends with, and so on. All of that information has to live somewhere. We can see how it might become cumbersome to sort through that data and isolate any single bit to show our user. Databases allow us to structure our data and access it efficiently.

---

### Answer: Databases!

Go through bullets. Show students what the sample database looks like. You can think of each row/entry as a record. A column is the vertical entity. Point out `foreign_keys` and how they reference primary keys of other tables.
  
---

### For our purposes, there are two parts to storing and accessing data:

Reiterate bullets for students. We will talk more about these in the next slides.

---

### "Relational DataBase Management System" (RDBMS)

Although SQL is a standard, there are different versions and implementations of the SQL language. Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard!

---

## SQL
### The way we communicate with our database

Make sure the link to the developer survey is most recent one! You can usually just change the year in the url.

SQL is a DSL used for managing data held in relational databases. The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control.

---

### What can SQL do?

Go through bullets.

---

### Column Types

Specify that columns need to have a data type defined. Go over the common types and show others via the link.

---

### PostgreSQL Shell Commands

Have students take a minute or so to write these down. We will be writing SQL queries in the context of Postgres. 

---

### Let's take a look at our sample data and create our database

  Setup Demo!
  1. Show students the `import_db.sh` file. The `.sh` extension is a `shell` file which can be used to run `shell` (terminal) commands.
  2. Make sure you are in the correct directory and run `./import_db.sh`. Show students that the db was created using `psql lecture` in the terminal.
  3. Show off helpful commands:
    - `\d` - list tables
    - `\d table_name` - show schema for a table
    - `SELECT * FROM table_name;` - quick query to see what a table looks like
    - `\?` - shows list of helpful commands

---

### The basics of SQL queries

Make sure to give students time to write down notes for this slide. Most of the logical expressions are straight forward, but you should try to cover `<>` and `%`.
  - `<>` is the same as `!=`.
  - `%` is a wild card, mainly used with `LIKE`
  
`LIKE/NOT LIKE` are for string comparisons whereas `IN` checks for existence in a list - similar to multiple OR conditions.

Remind students to close out their SQL queries with semi-colons; 
SQL keywords are NOT case sensitive: select is the same as SELECT.

---

### Common SQL Filters and Commands

Give students time to write these down as well.

The LIMIT clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.

---

### `NULL`

ISNULL takes only two parameters, the field being evaluated for NULL, and the result you want if it is evaluated as NULL. COALESCE will take any number of parameters, and return the first value encountered that isn't NULL.

There's a much more thorough description of the details here http://www.mssqltips.com/sqlservertip/2689/deciding-between-coalesce-and-isnull-in-sql-server/

---

## Demo Time!

Challenges 1 - 6

Switch over to the `challenges.sql` file and have students guide you through #1 - #6. If you need to save some time, feel free to do some of them yourself. 

---

# 5 minute break

---

### How can I perform calculations on my data?

Ask students this question! Take some answers and move to the next slide to show the answer.

---

## Using Aggregate Functions

SQL aliases are used to give a table, or a column in a table, a temporary name.

Aliases are often used to make column names more readable.

An alias only exists for the duration of the query.

You can alias a name with spaces by using [].

---

## Demo Time!

Challenges 7 - 10

Switch over to the `challenges.sql` file and have students guide you through #7 - #10. If you need to save some time, feel free to do some of them yourself. 

---

## 5 minute break!

---

### What if I want to operate on a subset of my data?

Feel free to take some answers from students if time permits. Move to the next slide when you are ready to go over the answer.

---

### GROUP BY

Go through the bullets. I recommend having students write these down.

---

## Demo Time!

Challenges 11 - 13

Switch over to the `challenges.sql` file and have students guide you through #11 - #13. If you need to save some time, feel free to do some of them yourself. 

---

### WHERE vs HAVING

This slide and the next slide just need to be repeated verbally. They are very straightforward.

---

### WHERE vs HAVING

It is important to stress that you can only filter by aggregates within a `HAVING` clause. You cannot use aggregates in `WHERE` clauses.

---

### Order of operation execution in SQL

Have students write this down.

---

# 5 minute break

---

### Can I use the result of a query in a different query?
* Ex: What is the most common possession -- and which ones cost more than $1,000?

---

### Answer: Yes -- Use a subquery!

---

## Demo Time!

Challenge 14

Switch over to the `challenges.sql` file and have students guide you through #14. 

---

### Subqueries

More bullets to go through!

---

## Demo Time!

Challenges 15 - 16

Switch over to the `challenges.sql` file and have students guide you through #15 - #16. If you need to save some time, feel free to do some of them yourself. 

---

### When do we join tables rather than using a subquery?

Lots of disagreement on this. In general, you can use whatever feels most intuitive.

---

### JOINS

It is important to state here that the tables are 'joined' together by their `foreign_key` and `primary_key` connections.

---

### The 3 Most Common Types of JOINs

Go through the bullets.

---

## Demo Time!

Challenges 17 - 20

Switch over to the `challenges.sql` file and have students guide you through #17 - #20. If you need to save some time, feel free to do some of them yourself. 

---

### What is a self-join?

---

### Answer

Go through bullets.

---

## Demo Time!

Challenge 21

Switch over to the `challenges.sql` file and have students guide you through #21.

---

### Today, you're going to be writing SQL code in a ruby file

Go through the bullets.

---

### Ruby heredoc demo

1. Switch to the `heredoc.rb` file and walk students through the `execute` function.
  - Uses the `pg` gem to connect to a database
  - executes the sql query passed in to the method
  - closes connection to the database
  - returns the query result
2. Walk students through the syntax of a heredoc. Let them know it is essentially a multi-line string!
3. Show students an example query being executed, and what the result looks like. They will be working on a spec based project today that will look like this.

---

## Questions?

---

### [KAHOOT](https://play.kahoot.it/#/?quizId=85da63ee-4075-42f8-94b3-2cd88de6915a)

---

### Review
1. How can we store information?
  - Databases!

2. How can we access the data?
  - SQL! Or some type of querying language.

3. What are the basics of SQL queries?
  - `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT`, `OFFSET`, `DISTINCT`

4. What if I want to do calculations on my data?
  - aggregates! `SUM`, `COUNT`, `AVG`, `MAX`, `MIN`

5. What if I want to group my data?
  - `GROUP BY`

6. Can I use the result of a query in a different query?
  - subqueries!

7. How can I query relationships across tables?
  - `JOIN`

8. What is a self-join?
  - joining a table to itself!

---

## Thank you!
