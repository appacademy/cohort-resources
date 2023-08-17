## W5D4 - Models, Migrations, & Associations

---

### Where we are in the course

- Ruby 
  - OOP
- SQL
- Rails  
  - Models  <- we are here!
  - Controllers
  - Views
    - HTML 
- JavaScript
  - JS Project 
- React
- Redux
- Full-stack projects
- MERN Stack projects 
- Jobsearch!!! 

---

![rails](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png)


---

### Rails: A server-side MVC web-application framework


---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

---

## ActiveRecord - an ORM Framework (The _*M*_ in MVC)
Allows us to:
* Convert data into ruby objects
* Represent associations between related data
* Validate data before it gets persisted to the database
* Perform database operations (**CRUD**) in OOP fashion

---

* _*Migrations*_
* Models
* Associations

---

# Migrations
* Allow us to create tables in our database
* *Incremental* and *reversible* changes made to a database schema, allowing it to evolve over time.
* Rails provides a Ruby DSL (domain-specific language) to enact changes to your tables, rather than write raw SQL.

Note:
* Not just a Rails thing - ubiquitous to app frameworks that work with relational DBs.

---

# Let's Migrate!


---

### Common migration terminal commands

* `bundle exec rails g migration Create{TableName}`
* `bundle exec rails g migration Add{ColumnName}To{TableName}`
* `bundle exec rails g migration Remove{ColumnName}From{TableName}`
* `bundle exec rails g migration AddIndexTo{TableName}`

### Common migration methods

* `create_table`
* `add_column`
* `remove_column`
* `add_index`


---

## Changing existing migrations

* You generally can't edit the migration and run it again
* Instead, you have some options:
  1. Write a new migration (much preferred)
  2. Rollback:
      * rollback the migration (via `rails db:rollback`)
      * _then_ edit your migration
      * run `rails db:migrate` to run the corrected version.
  3. Drop the database and then edit and migrate

---

* ~~Migrations~~
* *_Models_*
* Associations

---

## Model

* The central component of the MVC pattern
* A class that represents and directly manages the data, logic, and rules for a table
  * Typically contains: validations, associations, and custom methods
  * Inherits from ApplicationRecord (which, in turn, inherits from ActiveRecord)
* There is a one-to-one correspondence between a model and a table
* An instance of this class / model represents a row in our table

---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)

---

## Model Validations

* Model validations are best used to provide error messages to users interacting with your app
* It's highly likely that:
  * You will interact with the database at some point outside of Rails
  * You will make a mistake in your code that causes invalid data
* Database constraints are the last line of defense for data-integrity


---

## Common Validations

* `validates :some_column, presence: true`
  * similar to `null: false`
* `validates :other_column, uniqueness: true`
  * similar to `unique: true`
* Custom Validations


---

## Rails Models Demo

---

* ~~Migrations~~
* ~~Models~~
* *_Associations_*

---

## Associations

* Relationships between two Active Record models.
* Creates methods on our models that return related models through their foreign keys
* We don't have to write anymore SQL `JOIN` statements


---
### `belongs_to` 
* Used when a model has a foreign_key as one of its columns
* The 'many' side of a one to many relationship
* common examples:
	* a post belongs to a user
  * a comment belongs to a commenter and a post
  * a like belongs to a liker and a post

---
### Example belongs_to

```ruby
class Cat < ApplicationRecord
  belongs_to :owner,
  	primary_key: :id,
  	foreign_key: :owner_id,
  	class_name: :User
end
```
- belongs_to is an ActiveRecord method that takes the following arguments
```ruby
def belongs_to(:name, options = {})
end
```

---
### `has_many` 
* Used to relate to models that have a foreign_key pointing to it
* The 'one' side of a one to many relationship
* common examples:
	* a user has many posts
  * a video has many comments
  * a comment has many replies

---
### Example has_many

```ruby
class User < ApplicationRecord
  has_many :cats,
  	primary_key: :id,
  	foreign_key: :owner_id,
  	class_name: :Cat
end
```


---

## Associations Code Demo

---

## Associations Recap

```ruby
class Post < ApplicationRecord
  #validations go here
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end

class User < ApplicationRecord
  #validations go here
  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post
end
```

---
### has_many through
* connects models by using existing associations
* used to return data that does not have a direct foreign_key relationship
* ex:
```ruby
  has_many :association_name,
     through: :association_in_current_model,
     source: :association_in_through_model
 ```
---
### has_one
* only used in a one to one relationship
* easily confused with `belongs_to`
* only write them if you've already made the corresponding belongs_to
---
### Strategy when writing associations
- Start with `belongs_to`
	
- Write the corresponding `has_many` in the other model.
  
- Write `has_many` throughs using **only** other associations in the model as the `through`, check the associated model for an association to be the source.

---

## Terminal Commands Recap
- `rails new {project_name} -G --database=postgresql --minimal`
- `bundle exec rails db:create`
- `bundle exec rails g migration Create{TableName}`
- `bundle exec rails db:migrate`
- `bundle exec rails db:migrate:status`
- `bundle exec rails g model {ModelName}`
  - (creates migration file and model file)

---

# Thank you!
![rails-sponge](https://media.giphy.com/media/SIHZszIfLYOY0/giphy.gif)