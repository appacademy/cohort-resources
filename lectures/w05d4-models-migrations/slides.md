No file chosenSync editor position
1
## W5D4 - Models, Migrations, & Associations
2
​
3
---
4
​
5
### Where we are in the course
6
- CSS throughout
7
- Ruby 
8
  - OOP
9
- SQL
10
- Rails  
11
  - Models  <- we are here!
12
  - Controllers
13
  - Views
14
    - HTML 
15
- JavaScript
16
  - JS Project 
17
- React
18
- Redux
19
- Full-stack projects
20
- MERN Stack projects 
21
- Jobsearch!!! 
22
​
23
---
24
​
25
![rails](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png)
26
​
27
​
28
---
29
​
30
### Rails: A server-side MVC web-application framework
31
​
32
​
33
---
34
​
35
![mvc](https://camo.githubusercontent.com/40c8c3f6b10edc88340bb3a5c5b1646ba4276144/687474703a2f2f6d656469612e74756d626c722e636f6d2f66313435666130316464386361646432383533373139346465303063646135392f74756d626c725f696e6c696e655f6d7074717a6d5736426a31717a347267702e706e67)
36
​
37
---
38
​
39
## ActiveRecord - Rails' ORM
40
Allows us to:
41
* Represent models and their data
42
* Represent associations between data
43
* Validate models before they get persisted to the database
44
* Perform database operations (**CRUD**) in OOP fashion
45
​
46
​
47
---
48
​
49
* _*Migrations*_
W5D4 - Models, Migrations, & Associations
Where we are in the course
CSS throughout
Ruby
OOP
SQL
Rails
Models <- we are here!
Controllers
Views
HTML
JavaScript
JS Project
React
Redux
Full-stack projects
MERN Stack projects
Jobsearch!!!
rails

Rails: A server-side MVC web-application framework
mvc

ActiveRecord - Rails' ORM
Allows us to:

Represent models and their data
Represent associations between data
Validate models before they get persisted to the database
Perform database operations (CRUD) in OOP fashion
Migrations
Models
Associations
Migrations
Incremental and reversible changes made to a database schema, allowing it to evolve over time.
Not just a Rails thing - ubiquitous to app frameworks that work with relational DBs.
Rails allows you to use an easy Ruby DSL (domain-specific language) to describe changes to your tables, rather than write raw SQL.
Let's Migrate!
Common migration terminal commands
rails g migration Create{TableName}
rails g migration Add{ColumnName}To{TableName}
rails g migration Remove{ColumnName}From{TableName}
rails g migration AddIndexTo{TableName}
Common migration methods
create_table
add_column
change_column
add_index
Changing existing migrations
You can't just edit the migration and run the migration again
Instead, you have two options:
Write a new migration (much preferred)
Rollback:
rollback the migration (via rails db:rollback)
then edit your migration
run rails db:migrate to run the corrected version.
Migrations
Models
Associations
Model (M of the MVC)
The central component of the MVC pattern
A class that represents and directly manages the data, logic, and rules for a table
Typically contains: validations, associations, and custom methods
Inherits from ApplicationRecord (which, in turn, inherits from ActiveRecord)
There is a one-to-one correspondence between a model and a table
An instance of this class / model represents a row in our table
mvc

Database Constraints vs Model Validations
Model validations are best used to provide error messages to users interacting with your app
It's highly likely that:
You will interact with the database at some point outside of Rails
You will make a mistake in your code that causes invalid data
Database constraints are the last line of defense for data-integrity
Common Validations
validates :some_column, presence: true
similar to null: false
validates :other_column, uniqueness: true
similar to unique: true
Custom Validations
Rails Models Demo
Migrations
Models
Associations
Associations
Connections between two Active Record models.
Make common operations simpler and easier in your code.
We don't have to write anymore SQL JOIN statements
Simply methods that we can call
Example Association
class Strike < ApplicationRecord
  belongs_to :student,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :Student
end
belongs_to is an ActiveRecord method that takes the following arguments
def belongs_to(:name, options = {})
end
Associations Code Demo
Associations Recap
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
has_one
easily confused with belongs_to
only write them if you've already made the corresponding belongs_to
Strategy when writing associations
Start with belongs_to

Write the corresponding has_many or has_one in the other model.

Write has_many throughs using only other associations in the model as the through, check the associated model for an association to be the source.

Terminal Commands Recap
rails new #{ProjectName} -G -T --minimal --database=postgresql
rails db:create
rails g migration Create{TableName}
rails db:migrate
rails db:migrate:status
rails g model {ModelName}
(creates migration file and model file)
Thank you!
rails-sponge

