# W5D5
## ActiveRecord

---

## Learning Objectives

- Understand active record methods and conditions
- Understand how to chain active record methods in queries
- How to avoid N+1 queries

---

## ActiveRecord Querying vs SQL

+ Ruby interface for querying database
+ Mirrors SQl queries
+ Pros: less overall database access code, more convenient
+ Quick access to your database for debugging

---

## What is an ActiveRecord::Relation?

+ Most queries don't return arrays
  + Instead return instances of ActiveRecord::Relation
  + ActiveRecord::Relation objects are array-like
+ They are lazy
+ They allow for chaining
+ To force a query, add `.load`
	```ruby
  	Cat.all.load
  ```

---

## ActiveRecord Finder Methods 

+ Do not return relations, instead returns Ruby objects
+ Examples: `#find()`, `#find_by()`, `#first`, `#last` 
  + These methods return model instances
+ Executes method immediately

---

## Code Demo - Finder Methods

---

## ActiveRecord Finder Methods Recap

+ `#find()` :
  - finds a single record based on id
  - throws error if record does not exist
+ `#first` :
  - finds the first record ordered by primary key
+ `#last` :
  - finds the last record ordered by primary key
+ `#find_by()` :
  - look up the first matching record based on any column value
  - returns nil if record does not exist

---

## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify exact value to match, range of values, or multiples values to find
+ Ways to pass in conditions:
  ```ruby
  User.where("email = 'foo@bar.com'")
  User.where("email = (?)", "foo@bar.com")
  User.where(email: "foo@bar.com")
  User.where("email = :youremail", youremail: "foo@bar.com")
  ```


---
## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify exact value to match, range of values, or multiples values to find
+ Can also check for values in an array or range
	```ruby
  User.where(email: ["foo@bar.com", "fizz@buzz.com", "hello@world.com"])
  User.where(age: 18..35)
  ```
+ Can also accept direct SQL
  ```ruby
	User.where("username LIKE ?", '%man%')
  ```
---

## Chaining ActiveRecord Queries

+ More ActiveRecord methods
  + `#group()` : returns distinct records grouped by the passed attribute
  + `#having()` : filters grouped records that match the passed statement. 
  	+ Must be used with `#group`
  + `#order()` : returns records ordered by passed attribute
  + `#offset()` : offsets the ordered records by the number passed
  + `#limit()` : limits the returned records to the number passed

---

## Calculations/Aggregations

+ `#count()`
+ `#sum()`
+ `#average()`
+ `#minimum()`
+ `#maximum()`

---

## Code Demo

---

## Querying with Associations

+ ActiveRecord allows us to call associations 
+ Returns a relation object that is cached inside our object model
+ Sometimes we may not want to rely on cached results, so we need to requery
	+ Example: we have a `User` object named `spencer` with a `books` association on it
	+ To force a requery, use `spencer.books(true)`
	+ To remove cache, use `spencer.reload` (next time `spencer.books` is called, it will requery)

---

## Joins

+ Uses associations to join tables
+ `#joins()`/ `#left_outer_joins()` 
	+ Note that it is joinS with an S! VERY common bug :)
	+ Takes association names as parameters
  + Does NOT take table names! 
+ Returns ActiveRecord::Relation
+ Through associations allow us to call a double join with only one `#joins`
	+ `Movie.joins(:actors)`, NOT `Movie.joins(:castings).joins(:actors)`

---

## Using Select with Joins

+ When using `#joins`, you must include the `#select` clause in order to have access to columns from the joins table in the returned results
  + Default is only columns from primary table
  + To get all columns, we must use
  ```ruby
    users = User.joins(:chirps).select("*")
  ```
  + Even though all columns will be returned in the query, we cannot see them until we call `#attributes` on each object

---

## Pluck

+ Returns an `Array` of values of the specified columns
+ Accepts column names as arguments
+ Triggers an immediate query
+ Cannot be chained with any further scopes 
  + Must be at the end of the query

---

## Code Demo

---

## N+1 Queries

+ When you execute a query and then you try to run queries for each member of the collection. 
  ```ruby
    posts = user1.posts
    res = {}
    posts.each do |post|
      res[post] = post.comments.length
    end
  ```
+ You make 1 query for user.posts. Then, you make N more queries to find the comments length for each post. This is a N+1 query.

---

## Includes and Eager Loading for N+1 Queries

+ `#includes` takes association names as parameters
+ Allows us to chain onto our queries and pre-fetch associations
  + Generates a 2nd query to pre-fetch associated data
+ Eager loading is pre-fetching associated objects using as few queries as possible and caching the results.
  ```ruby
    posts = user1.posts.includes(:comments)
    res = {}
    posts.each do |post|
      res[post] = post.comments.length
    end
  ```

---

## Joins for N+1 Queries

+ Creates a single query fetching all data into a single table
+ Ideally used when using aggregation on the associated data e.g. count
```ruby
  posts = user1
    .posts
    .select("posts.*, COUNT(*) as comments_count")
    .joins(:comments)
    .group("posts.id")

  posts.map do |post|
    [post.title, post.comments_count]
  end

```

---

# Code Demo

---

## [KAHOOT](https://play.kahoot.it/#/?quizId=3aca0565-6d36-4d33-bd79-20c408ea0848)

---

## Thank you!