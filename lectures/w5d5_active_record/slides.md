# W5D4
## ActiveRecord

Note:
We do have a lot to go through today and the material is fairly dense. There's probably going to be a lot of what if questions, so I would encourage you to test those out on your own during today's projects and if you're still unclear, feel free to put in a PT question.

* There is a good chance that your question will be answered later in the demo

READ SCRIPT: BlueBird Business Plan, Sell our users' data!

---
## Sell our User's Data!
![rich](https://media1.tenor.com/images/fe0b30d710e304a4afed6b05874154bc/tenor.gif?itemid=15726252)
---

## Learning Objectives

- Understand how powerful active record is
- Understanding its limitations
- How to avoid N+1 queries
- Recognizing we don't need to memorize everything

---

## ActiveRecord Querying vs SQL

+ Ruby interface for querying database
+ Mirrors SQl queries
+ Pros: less overall database access code, more convenient


Note:
Yesterday, you learned about models and migrations.You learned that all models in rails inherit from ActiveRecord::Base.

AR is the ORM that allows us to represent data from a db as ruby objects which we can then call and manipulate.

Today, we will be learning some ways we can use ActiveRecord to query our database.

Oftentimes in our models, we might need access to records in our database, or when we're using our rails console to test, we need to be able to query our database.

Instead of having to write raw sql and embed that into our ruby code, we can use AR methods that does the same thing but reads and writes like ruby code.

AR contains a number of query methods that mirror SQL queries.

It runs SQL queries under the hood.

Pros: less overall database access code, more convenient

It is this AR querying interface that we'll be focusing on today.
We’ll get into the some interesting and useful areas of Active Record queries. 

---

## What is an ActiveRecord::Relation?

+ Most queries don't return instances of the Model
  + Instead return instances of ActiveRecord:Relation
  + These are collections of instances from the DB
+ They are lazy
+ They allow for chaining of AR methods

Note:
Most AR queries don't return instance of the Model which are methods are called on. They instead return relations. Relations are basically really good array look alikes, you can iterate, but you can also do more which is what makes AR so powerful.

They are usually lazy, meaning they don't tell the database to execute a query until it's used.

Because they are lazy, they also allow for chaining. Since they don't execute a query until it's used, that means you can chain on other AR methods.

Once it is time for the AR query chain to execute, AR will determine an optimal way to structure the query to achieve the desired results.

---

## ActiveRecord Finder Methods 

+ Do not return relations, instead returns instances
+ Examples: `#find()`, `#find_by()`, `#first`, `#last` 
  + these methods return model instances
+ Executes method immediately

Note:
Finder methods return instances of the model. `#Find`, for example returns a single record if passed a single id.

These queries run the SQL query immediately.

Under the hood:
1. AR converts the supplied options to an equivalent SQL query
2. Fire the SQl query and retrieve corresponding results from the db
3. Instantiate the equivalent Ruby object of the appropriate model for every resulting row.

---

## Code Demo

Note:
Code Demo - 1
#find will raise an ActiveRecord::RecordNotFound exception if no matching record is found.
#find_by will return nil

---

## ActiveRecord Finder Methods Recap

+ `#find()` :
  - finds a single record based on id
+ `#first` :
  - finds the first record ordered by primary key
+ `#last` :
  - finds the last record ordered by primary key
+ `#find_by()` :
  - look up the first matching record based on any column value

Note:
Summarize what we saw from demo using these methods
In demo, notice that the return value of these methods were single Ruby objects

---

## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify exact value to match, range of values, or multiples values to find. 
+ Ways to pass in conditions:
  ```ruby
  User.where("email = 'foo@bar.com'")
  User.where(email: "foo@bar.com")
  User.where("email = (?)", "foo@bar.com")
  User.where("email = :youremail", youremail: "foo@bar.com")
  ```

Note:
Now that we've seen methods that execute immediately and return Ruby objects, let's now take a look at methods that return AR relations. These are generally methods that allow us to specify conditions for our queries.

`#where` is the SQL equivalent of WHERE clause. It returns a relation, which again is an array like object, so if only one record is returned, you'd have to index into it to grab the first record.

If condition was a specific value:
1. pass in as pure string, similar to sql
2. as hash/key-value pair (value can be an array as well)
3. as placeholder/parameter ("scrubbing"), similar to sql as well

Arguments can be:
1. strings/symbols
2. arrays
3. hashes

---

## Chaining ActiveRecord Queries

+ More ActiveRecord methods
  + `#group()` : returns distinct records grouped by the passed attribute
  + `#having()` : filters grouped records that match the passed statement. 
    + Must be used with `#group`
  + `#order()` : returns records ordered by passed attribute
  + `#offset()` : offsets the ordered records by the number passed
  + `#limit()` : limits the returned records to the number passed

Note:
let's now take a look at methods where we can chain onto our queries.

These are fairly straight forward as they're all SQL equivalents. 

---

## Calculations/Aggregations
+ `#distinct`
+ `#count`
+ `#sum`
+ `#average`
+ `#minimum`
+ `#maximum`

Note:
These methods are pretty self-explanatory in their functionality.
All calculation methods work directly on a model or relation. 
You chain these methods at the end your query.

---

## Code Demo

Note:
Code Demo - 2

Notice how since we are only working with 1 table, we don't need to specify table names, or select all columns. In SQl, you'd have to select.*

Also, notice the return values for these are AR relations

---

## 10 min Break

---

## Querying with Associations

+ ActiveRecord allows us to call associations
+ Returns a relation object that is cached inside our object model


Note:
When you call an association like user.posts, a relation object is returned and cached inside the model object so that future invocations of the association will not hit the db.

You can force evaluation by calling load
You can force association to reload by calling user.posts(true)
or you can use user.reload to throw away cached relations

---

## Joins

+ Uses associations to join tables
+ `#joins()`/ `#left_outer_joins()` 
  + takes association names as parameters
+ Returns ActiveRecord::Relation

Note:
Rails associations often do the heavy lifting for us, essentially joining two associated tables for us.

We can call #joins and pass in the association name as argument. Because our associations are set up with the foreign_key, primary_key and classname, AR knows how to build the joins tables.

You can join on single association or multiple associations.

If you want to select a set of records whether or not they have associated records, you can use `left_outer_joins`, similar to SQL.

`#joins` returns an AR relation object, so you can continue to chain on methods to it.

---

## Using Select

+ Use `#select` to select column names you want returned in your results.
  ```ruby
    users = User.select(:name, :email)
    users = User.select("name, email")
  ```
+ When using `#joins`, you must include the joined table's columns in `#select` in order to have access to columns from the joins table
  + Default is only columns from primary table
  ```ruby
    users = User.joins(:post).select("users.*, posts.*")
  ```

Note:
If we don't call select, AR by default returns access to all the columns.

If we want specific access to columns, we need to call select and pass in the column names as arguments.
  - they can be symbols or strings like in SQL

When using #joins, if you don't add a call to select, you'll only have access to columns from the primary table you called joins on.
  - if we want specific columns fom post table, we need to call select and specify

---

## Pluck

+ Accepts column names as arguments
+ Returns an array of values of the specified columns
+ Triggers an immediate query
+ Other scopes must be constructed earlier
+ Cannot be chained with any further scopes 
  + Must be at the end of the query

Note:
Pluck can be used to query multiple columns from a table, similar to `#select` where it accepts column names as arguments.

But unlike `#select`, `#pluck` triggers an immediate query and directly returns an array. As a result, any other scopes must be chained before `#pluck`.

---

## Code Demo

Note:
Code Demo - 3

---

## 5 min break

---

## N+1 Queries

+ When you execute a query and then you try to run queries for each member of the collection. 
  ```ruby
    posts = user.posts
    res = {}
    posts.each do |post|
      res[post] = post.comments.length
    end
  ```
+ You make 1 query for user.posts. For each post, you make N queries to find the comments length for each post. This is a N+1 query.

Note:
You should strive to reduce the number of queries that run on your database as much as possible. There's a certain amount of overhead associated with running a query, so being able to batch up work into one query increases efficiency.

You want to avoid what we call N+1 queries.

In the next few slides, we will go over how to minimize potential for N+1 queries using `#includes` and `#joins`.

---

## Includes and Eager Loading for N+1 Queries

+ `#includes` takes association names as parameters
+ Allows us to chain onto our queries and pre-fetch associations
  + Generates a 2nd query to pre-fetch associated data
+ Eager loading is pre-fetching associated objects using as few queries as possible and caching the results.
  ```ruby
    posts = user.posts.includes(:comments)
    res = {}
    posts.each do |post|
      res[post] = post.comments.length
    end
  ```

Note:
One way to avoid N+1 queries is to use `#includes`. `#includes` takes the name of one or more associations that you'd like to load at the same time as your original object and stores them in memory.

You can pre-fetch multiple associations. 

---

## Joins for N+1 Queries

+ Creates a single query fetching all data into a single table
+ Ideally used when using aggregation on the associated data e.g. count
```ruby
  posts = user
    .posts
    .select("posts.*, COUNT(*) as comments_count")
    .joins(:comments)
    .group("posts.id")

  posts.map do |post|
    [post.title, post.comments_count]
  end

```

Note:
Remember, `#includes` results fetches all associated data specified. This means there's a potential that this returns ALOT of data.

If you don't necessarily need to use all of this data, say you just want to see a count of the number of comments for each post, then you don't want to do such an expensive operation unnecessarily.

This is where you'd want to consider using joins instead.

Potential problem of joins is that it does end up creating this giant joins table, which also has a cost to it if you're not using an aggregatation.

Ultimately, this tradeoff will depend on your app and tables, but recognizing where disadvantages are with each method is a start.l

---

# Code Demo

Note:
Code Demo - 4


---

## Thank you!
