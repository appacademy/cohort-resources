# aliases
* `rails g` 
    * g is short for generate
* `rails d`
    * d is short for destroy
* `rails s`
    * s is short for server
* `rails c`
    * c is short for console

# `bundle exec`

* whenever you run `bundle exec` in front of your rails commands, the rails cli will make sure to run the command based on the versions specified in the `Gemfile.lock` file


# Useful Commands
*  ```rails new <Project Name> ```
    * defaults the dabatase to sqlite3
*  ```rails _VERSION_ new <Project Name>``` 
*  ```rails new  <Project Name> -G -d postgresql```
    * `-d` specifies the database 
    * `-G` is a flag that does **not** intialize a git
*  ```rails g migration <Migration Description>```
    * creates a migration
    * if you want to create a table you must say something like: 
    ```
    bundle exec rails g migration CreateCats
    ```
    * where cats will be the name of the table and create tells rails that you want to create a table.
*  ```bundle exec rails g controller <Controller Name>```
    * make sure controller name is plural 
* ```bundle exec rails g model <Model Name>```
    * model names are singular
    * makes model and creates a migration that allows you to make your table
* ```bundle exec rails d controller <Controller Name>```
    * deletes controller and additional files created with the ```rails g controller``` command
* ```bundle exec rails d model <Model Name>```
    * deletes model, migration, and additional files created with the ```rails g model``` command
* ```bundle exec rails db:create```
    * creates your database
* ```bundle exec rails db:migrate```
    * runs the migrations
* ```bundle exec rails db:seed```
    * seeds the data base from the seed information located in the `seed.rb` file
* ```bundle exec rails db:setup```
    * runs `db:create`, `db:schema:load`, `db:seed`
* ```bundle exec rails db:drop```
    * drops all of the info in your database
* ```bundle exec rails db:reset```
    * runs `db:drop`, `db:setup`
* ```bundle exec rails db:rollback```
    * rolls everything back to the most recent migration
* ```bundle exec rails routes```
    * shows all routes defined in the `routes.rb` file 
* ```bundle exec rails routes -c <Controller Name>```
    * shows all routes for a specific controller


