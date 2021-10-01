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
+ Mirrors SQL queries
+ Pros: less overall database access code, more convenient

Note:
Tie back to the models and migrations lecture and explain how AR ORM allows us to represent data from a db as ruby objects which we can then call and manipulate.

In addition to associations, we can use ActiveRecord methods to query our database.

Ask students for examples of when we might need to query our db. Give class some example use cases and why AR makes querying easier compared to SQL.

---


## ActiveRecord Finder Methods 

+ Return standard Ruby objects
+ Examples: `#find()`, `#find_by()`, `#first`, `#last` 
  + These methods return model instances
+ Executes method immediately
+ [List of finder methods](https://api.rubyonrails.org/v5.2.3/classes/ActiveRecord/FinderMethods.html)

Note:
Pull up docs to show list of finder methods (https://guides.rubyonrails.org/v5.2/active_record_querying.html)


---

## Code Demo - Finder Methods

[link to project](https://github.com/appacademy/cohort-resources/tree/08-30-2021/Troll)
Note:
SCRIPT: "Yesterday the instructors got together for another Happy Hour business meeting about Troll because let me tell you, this app is taking off. We are gaining a ton of traction with the instructors market -- particularly at one very awesome bootcamp, and strangely in Russia -- and we need to work out a way to capitalize on this.

We decided that if this company is ever going to be a true tech giant, we need to start acting like one..."

SCRIPT: "So we decided to start selling our user's data."

"In addition to email, we'll also store our users' age and political affiliation. That way we can query our database with active record more specifically and maybe down the road we can use that information to sell ads, influence elections, whatever we want."




Note:
Code Demo - 1
#find will raise an ActiveRecord::RecordNotFound exception if no matching record is found.
#find_by will return nil

Do prompts in User file - Finder methods


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

## What is an ActiveRecord::Relation?

+ Most queries return ActiveRecord:Relation objects
  + array-like objects
  + They are lazy
  + They allow for chaining

Note:
Highlight ActiveRecord::Relation object is just a special type of Ruby object

Lazy evaluation allows for chaining. Lets us build a query in steps

Once it is time for the AR query chain to execute, AR will determine an optimal way to structure the query to achieve the desired results.

You can force evaluation by calling load

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

Note:
Point out that `#where` returns AR relations and that they'd need to index into this collection

---

## ActiveRecord Queries with Conditions

+ `#where`/ `#where.not` allows you to specify exact value to match, range of values, or multiples values to find
+ Ways to pass in conditions:
  ```ruby
  User.where("email = 'foo@bar.com' AND username = 'foobar'")
  User.where(email: "foo@bar.com", username: "foobar")
  User.where("email = (?) AND username = (?)", "foo@bar.com", "foobar")
  User.where(
    "email = :youremail AND username = :username", 
    youremail: "foo@bar.com",
    username: "foobar" 
  )
  ```

Note:
Point out that `#where` returns AR relations and that they'd need to index into this collection
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
These are fairly straight forward as they all have SQL equivalents. 

---

## Calculations/Aggregations

+ `#count()`
+ `#sum()`
+ `#average()`
+ `#minimum()`
+ `#maximum()`

Note:
These methods are pretty self-explanatory in their functionality.
All calculation methods work directly on a model or relation. 
You chain these methods at the end your query.

Probably want to use sql strings inside to easily use aliases

---

## Code Demo

Note:
Code Demo - 2 (Interactive)
User file - Query methods

Notice how since we are only working with 1 table, we don't need to specify table names, or select all columns. In SQl, you'd have to select.*

Also, notice the return values for these are AR relations.



---

## Querying with Associations

+ ActiveRecord allows us to call associations 
+ Returns a relation object that is cached inside our object model

Note:
Explain what it means for a relation to be cached
or you can use user.reload to throw away cached relations

---

## Joins

+ Uses associations to join tables
+ `#joins()`/ `#left_outer_joins()` 
	+ Takes association names as parameters
+ Returns ActiveRecord::Relation

Note:
Explain how we can call #joins and pass in the association name as argument. Because our associations are set up with the foreign_key, primary_key and classname, AR knows how to build the joins tables.

`#joins` returns an AR relation object, so you can continue to chain on methods to it.

---

## Using Select with Joins

+ When using `#joins`, you must include the joined table's columns in `#select` in order to have access to columns from the joins table in the returned results
  + Default is only columns from primary table
  ```ruby
    users = User.joins(:post).select("*")
  ```
Note:
Highlight how we can use `#select` to specify column names we want a access to 


---

## Pluck

+ Accepts column names as arguments
+ Returns an array of values of the specified columns
+ Triggers an immediate query
+ Cannot be chained with any further scopes 
  + Must be at the end of the query

Note:
Walk through using `#pluck` and some use cases for it. Pluck may return duplicate values


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
+ You make 1 query for user.posts. For each post, you make N queries to find the comments length for each post. This is a N+1 query.

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
Note:
Explain how to use `#includes` to avoid N+1 queries. Ask class if they see potential drawbacks of using `#includes`.

Remember, `#includes` fetches all associated data specified. This means there's a potential that this returns ALOT of data.


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