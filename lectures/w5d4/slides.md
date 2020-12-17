## W5D4 - Models, Migrations, & Associations

---

![rails](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png)

Note:

Stay on this slide before diving in. Before you begin, ask the class: "What do you think rails _is_? Take the next minute, and turn and talk to your partner."

After a minute, bring the class back to attention. "Ok, so who wants to share?". Generally, nobody will raise their hand - but eventually, they'll give in. Field several answers; expect people to say generic things like "It's a framework." Probe deeper.

---

### Rails: A server-side MVC web-application framework

Note:

Ok, so we know the _literal_ definition of rails - it uses all of this cliche jargon. But how can we think about it really?
- You can think of Rails as a skeleton directory for a Full Stack web application. 
- Rails ships with tons of pre-written Ruby code. This Ruby code allows us to implement every single layer of a web application (Client, server, database (aka MVC)) without worrying about _how_ its implemented (it's very opinionated).
- You’ll hear us throw around the term “rails magic” a fair amount over the next month. That is because rails extracts a lot of the messy stuff away from us, and sometimes it can just figure out what you're trying to do.

---

![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)
    
Note:
"Anybody seen this diagram before?". Walk through what this is very briefly. Then focus in on the `Model`. This is what we'll be focusing on today.
- For each table, we define a Ruby model, and an instance of the model will represent an individual row in the table
- Remember from yesterday, we did this by building our own Object-Relational Mapping (ORM) framework. Lucky for us, Rails has a library that does this for us.
- If anyone asks, there are other patterns such as mva (adapter) mvp (presenter) mvvm

---

## ActiveRecord - an ORM Framework (The _*M*_ in MVC)
Allows us to:
* Represent models and their data
* Represent associations between data
* Validate models before they get persisted to the database
* Perform database operations (**CRUD**) in OOP fashion

Note:
- Ask class if anyone can define an ORM (should be review from previous day)
- ActiveRecord is a library in Rails that ships with classes and methods which allow us two represent rows in our database as Ruby objects
- We refer to this as an ORM (Object-Relational Mapping) tool
- ORM - system that translates between SQL records and Ruby objects

---

* _*Migrations*_
* Models
* Associations

Note: 
- In order to set up our DB/tables and get the M part of our MVC framework fully functioning, we will cover three main topics.
Ok - Here's what we're going to go over today. First, let's start with migrations.

---

# Migrations
* *Incremental* and *reversible* changes made to a database schema, allowing it to evolve over time.
* Not just a Rails thing - ubiquitous to app frameworks that work with relational DBs.
* Rails allows you to use an easy Ruby DSL (domain-specific language) to describe changes to your tables, rather than write raw SQL.

Note:

- Migration is a Ruby class that extends ActiveRecord::Migration
- Migrations have methods (and classes) that help us set up and modify our database structure without ever writing any raw SQL
- They are something we run once - we write a new migration file any time we want to change the structure of our database (table name, column names)
- We end up having a record of changes that we’ve made, represented in Ruby code. You could think of them as a paper trail
- This is important because database schemas change A LOT over time. We add columns to tables, change column names, add more tables...

---

# Let's Migrate!

Note: 

Migration demo

---

### Common migration terminal commands

* `bundle exec rails g migration Create{TableName}`
* `bundle exec rails g migration Add{ColumnName}To{TableName}`
* `bundle exec rails g migration Remove{ColumnName}From{TableName}`
* `bundle exec rails g migration AddIndexTo{TableName}`

### Common migration methods

* `create_table`
* `add_column`
* `change_column`
* `remove_index`

Note:

* These are just some of them, there are tons. I highly encourage you to look at the rails docs (which are magnificent) if you ever need a method
* In addition to the `add`s that we used there are also `remove`s

---

## Changing existing migrations

* You can't just edit the migration and run the migration again
* Instead, you have two options:
  1. Write a new migration (much preferred)
  2. Rollback:
      * rollback the migration (via `rails db:rollback`)
      * _then_ edit your migration
      * run `rails db:migrate` to run the corrected version.

Note:

* Rollback should only be performed on your local machine and NEVER in production, it is extremely dangerous
* Ideally, we always want to be moving forward, not backward

---

* ~~Migrations~~
* *_Models_*
* Associations

Note: 

Ok - onto models!

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

## Database Constraints vs Model Validations

* Model validations are best used to provide error messages to users interacting with your app
* It's highly likely that:
  * You will interact with the database at some point outside of Rails
  * You will make a mistake in your code that causes invalid data
* Database constraints are the last line of defense for data-integrity
* Writing constraints is work, but they will save you a lot of pain

Note:

* Common question: Why do we need both database constraints and model validation? If we have model validations, it's never going to touch our database, right?
  1) We want a second line of defense - just because our Ruby code validates our data for us, doesn't mean somebody can't `psql` directly into our database, and insert data through there. 
  2) (So then why do we need model validations?) Model level validations are really just there for UI. We can make something fail softly (Users are stupid. How many times have you entered incorrect data on a signup page?). It gives us a nice list of error messages if something goes wrong, rather than `raise`ing a nasty DB level error. 

---

## Common Validations

* `validates :some_column, presence: true`
  * similar to `null: false`
* `validates :other_column, uniqueness: true`
  * similar to `unique: true`
* Custom Validations

Note:

* Again, for Anything other than these simply pull up the rails docs, there are tons of options

---

## Rails Models Demo

---

* ~~Migrations~~
* ~~Models~~
* *_Associations_*

Note: 

I would take a break here. Come back, take [this kahoot](https://create.kahoot.it/details/0a7c09c6-b0f3-490c-a5db-82ec2630ba26) give a brief recap, then move to the last topic 🎉

---

## Associations

* Connections between two Active Record models.
* Make common operations simpler and easier in your code.
* We don't have to write anymore SQL `JOIN` statements
* Simply methods that we can call

Note:

* Okay, we know how to structure and setup our DB, how to model it and interact with it, but what about how certain tables interact with one another?

---
---
### Example Association

```ruby
class Strike < ApplicationRecord
  belongs_to :student,
  	primary_key: :id,
  	foreign_key: :student_id,
  	class_name: :Student
end
```
- belongs_to is an ActiveRecord method that takes the following arguments
```ruby
def belongs_to(:name, options = {})
end
```
Note: 
- rails is just letting us call the belongs_to method in a nicer looking format
- :strikes is the name of the method it creates, primary_key, foreign_key, and class_name are all keys to the options hash

---

## Associations Code Demo

---

## Associations Recap

```ruby
class Chirp < ApplicationRecord
  #validations go here
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end

class User < ApplicationRecord
  #validations go here
  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp
end
```

Note:

* A second approach to explaining this if it isn't clear --> Both for the belongs_to and the has_many are the same. The primary_key is **always** the id, and the foreign_key is the column that points to that key.
* The only difference between the belongs_to and the has_many is that in the belongs_to the foreign_key is in _that_ model's table and the primary_key is in the class_name's table. For has_many the primary_key is in _that_ table and the foreign_key is in the class_name's table.
---
### has_one
* easily confused with belongs_to
* only write them if you've already made the corresponding belongs_to
---
### Strategy when writing associations
- Start with belongs_to
	
- Write the corresponding has_many or has_one in the other model.
  
- Write has_many throughs using **only** other associations in the model as the through, check the associated model for an association to be the source.

Note:
- If a model has a foreign_key (ex: other_model_id) - it's belongs_to
- primary_key and foreign_key will be the same, the class_name will be the original model.
  - It is only has_one if you want to return one ActiveRecord object, instead of an array.
---

## [Kahoot](https://create.kahoot.it/details/4c14ff91-05fc-4344-9e01-78be04363941)

---

## Terminal Commands Recap
- `rails new {project_name} -d postgresql`
- `bundle exec rails db:create`
- `bundle exec rails g migration Create{TableName}`
- `bundle exec rails db:migrate`
- `bundle exec rails db:migrate:status`
- `bundle exec rails g model {ModelName}`
  - (creates migration file and model file)

---

# Thank you!
![rails-sponge](https://media.giphy.com/media/SIHZszIfLYOY0/giphy.gif)
