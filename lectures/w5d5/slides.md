# W5D4
## ActiveRecord

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

---

## What is an ActiveRecord::Relation?

+ Most queries don't return Ruby objects
  + Instead return instances of ActiveRecord:Relation
+ They are lazy
+ They allow for chaining

---

## ActiveRecord Finder Methods 

+ Do not return relations, instead returns Ruby objects
+ Examples: `#find()`, `#find_by()`, `#first`, `#last` 
  + these methods return model instances
+ Executes method immediately

---

## Code Demo #1

---

## ActiveRecord Finder Methods Recap

+ .find() :
  - finds a single record based on id
+ .first :
  - finds the first record ordered by primary key
+ .last :
  - finds the last record ordered by primary key
+ .find_by() :
  - look up the first matching record based on any column value

---

## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify values to match 
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

## Code Demo #2

---

## Querying with Associations

+ ActiveRecord allows us to call associations 
+ Returns a relation object that is cached inside our object model

---

## Joins

+ Uses associations to join tables
+ `#joins()`/ `#left_outer_joins()` 
	+ takes association names as parameters
+ Returns ActiveRecord::Relation

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

---

## Pluck

+ Accepts column names as arguments
+ Returns an array of values of the specified columns
+ Triggers an immediate query
+ Other scopes must be constructed earlier
+ Cannot be chained with any further scopes 
  + Must be at the end of the query

---

## Code Demo #3


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

---

# Code Demo #4 

---

## [KAHOOT](https://play.kahoot.it/#/?quizId=3aca0565-6d36-4d33-bd79-20c408ea0848)


---

## Thank you!
