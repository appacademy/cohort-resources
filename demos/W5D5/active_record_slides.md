# W5D5
### ActiveRecord




---

### Learning Objectives

- Given a SQL query - re-write that query using ActiveRecord to get the same results.
- Given a Rails project with models, associations, and seed data write ActiveRecord queries to return data from the database.
   
- Given models and associations, write a model instance method that uses the ActiveRecord .includes method to avoid N+1 queries

---

### BlueBird Business Plan
- Gaining traction in schools
- How can we capitalize on this??


---

## Sell our users' data!
![so-meta](https://media.giphy.com/media/4d9l6q9QpmDQI/giphy.gif)

Note:
So we decided to start selling our user's data.

In addition to email, we'll also store our users' age and political affiliation.

That way we can query our database with active record more specifically and maybe down the road we can use that information to sell ads, influence elections, whatever we want.

---
## ActiveRecord Methods
- .all :
  - returns all records for a given table
- .find() :
  - finds a record based on id
- .find_by() :
  - look up the first matching record based on any column value
- .where()/where.not() :
  - return all records matching/not matching a given argument:
    - column value e.g. (age: 11)
    - query string e.g. ("body LIKE '%Harry%'")
    - scrubbing e.g. ( 'name = ?', 'Hermione' )
---

## Code demo

Note:
1. Getting set up - bundle install, db:setup
2. Basic query methods - find, find_by, all, where, where.not
---

# 5 min break
---
## More ActiveRecord Methods
- .joins() :
  - uses associations to join tables
- .left_outer_joins() :
  - similar to SQL, will allow for nil values
- .distinct() :
  - returns only distinct values, similar to when used with SQL
- .select() :
  - only selected columns are returned as an ActiveRecord object
- .pluck() :
  - returns values of a column as an array. Returns nested arrays if given multiple columns 
---
# Code Demo



---
## 5 min break
---
## More ActiveRecord Methods
- .group() :
  - returns distinct records grouped by the passed attribute
- .having() :
  - filters grouped records that match the passed statement. Must be used with .group
- .order() : returns records ordered by passed attribute
- .offset() : offsets the ordered records by the number passed
- .limit() : limits the returned records to the number passed

Note:


We did not demo order, offset, and limit given these are fairly straight forward. Play around with these during the project today
---
# Code Demo

Note:
1. Group
2. Pluck - why it must go last
3. Having - must use a string to pass to our SQL query
4. Order, Offset, and Limit
5. Challenge - who likes Nimbus's posts the most?

---
# 5 min break
---
 
### When will the witches be fetched from the database?
```ruby
witches = Student.where(school: 'Hogwarts')
  owls = Animal.where('type = ?', 'owl')
  
    owls.each do |owl|
       puts "#{owl.name} is a #{owl.breed}"
    end
  
    witches.each do |witch|
        puts "#{witch.name} is in #{witch.house} House."
    end
```
---
## Includes vs Joins

#### Includes
- Does not modify the original query
- Generates a 2nd query to pre-fetch associated data
- Used as an optimization 

#### Joins
- Creates a single query fetching all data into a single table
- Ideally used when using aggregation on the associated data e.g. count

Note:

---

## Code Demo
 

Note: 


---



Note:

---

## Thank you!
