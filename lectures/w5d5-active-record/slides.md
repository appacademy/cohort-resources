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

---

## What is an ActiveRecord::Relation?

+ Most queries don't return Ruby objects
  + Instead return instances of ActiveRecord:Relation
  + ActiveRecord:Relation objects are array-like
+ They are lazy
+ They allow for chaining

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
+ `#first` :
  - finds the first record ordered by primary key
+ `#last` :
  - finds the last record ordered by primary key
+ `#find_by()` :
  - look up the first matching record based on any column value

---

## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify exact value to match, range of values, or multiples values to find
+ Ways to pass in conditions:
  ```ruby
  User.where("email = 'foo@bar.com'")
  User.where(email: "foo@bar.com")
  User.where("email = (?)", "foo@bar.com")
  User.where("email = :youremail", youremail: "foo@bar.com")
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

---

## Joins

+ Uses associations to join tables
+ `#joins()`/ `#left_outer_joins()` 
	+ Takes association names as parameters
+ Returns ActiveRecord::Relation

---

## Using Select with Joins

+ When using `#joins`, you must include the joined table's columns in `#select` in order to have access to columns from the joins table in the returned results
  + Default is only columns from primary table
  ```ruby
    users = User.joins(:chirps).select("*")
  ```

---

## Pluck

+ Accepts column names as arguments
+ Returns an array of values of the specified columns
+ Triggers an immediate query
+ Other scopes must be constructed earlier
+ Cannot be chained with any further scopes 
  + Must be at the end of the query

---

## Code Demo

---

## N+1 Queries

+ When you execute a query and then you try to run queries for each member of the collection. 
  ```ruby
    chirps = user1.chirps
    res = {}
    chirps.each do |chirp|
      res[chirp] = chirp.comments.length
    end
  ```
+ You make 1 query for user.chirps. For each chirp, you make N queries to find the comments length for each chirp. This is a N+1 query.

---

## Includes and Eager Loading for N+1 Queries

+ `#includes` takes association names as parameters
+ Allows us to chain onto our queries and pre-fetch associations
  + Generates a 2nd query to pre-fetch associated data
+ Eager loading is pre-fetching associated objects using as few queries as possible and caching the results.
  ```ruby
    chirps = user1.chirps.includes(:comments)
    res = {}
    chirps.each do |chirp|
      res[chirp] = chirp.comments.length
    end
  ```

---

## Joins for N+1 Queries

+ Creates a single query fetching all data into a single table
+ Ideally used when using aggregation on the associated data e.g. count
```ruby
  chirps = user1
    .chirps
    .select("chirps.*, COUNT(*) as comments_count")
    .joins(:comments)
    .group("chirps.id")

  chirps.map do |chirp|
    [chirp.body, chirp.comments_count]
  end

```

---

# Code Demo

---

## [KAHOOT](https://play.kahoot.it/#/?quizId=3aca0565-6d36-4d33-bd79-20c408ea0848)

---

## Thank you!