# aliases
* rails g 
    * g is short for generate
# bundle exec 
* whenever you run bundle exec in front of your rails commands, the rails cli will make sure to run the command based on the versions specified in the Gemfile.lock file
# Useful Commands
*  ```rails new <Project Name>```
*  ```rails new  <Project Name> -G -d postgresql```
*  ```rails g migration <Migration Description>```
    * create a migration
    * if you want to create a table you must say something like: 
    ```
    bundle exec rails g migrate CreateCats
    ```
    * where cats will be the name of the table and create tells rails that you want to create a table.
*  ```bundle exec rails g controller <Controller Name>```
    * make sure controller name is plural 
* ```bundle exec rails g model```
    * makes model and creates a migration that allows you to make your table
* ```rails c```
    * gets you into the rails console 
* ```bundle exec rails db:reset```
    * runs db:drop db:create db:migrate
* ```bundle exec rails db:create```
    * creates your database
* ```bundle exec rails db:migrate```
    * runs the migrations
* ```bundle exec rails db:seed```
    * seeds the data base from the seed information located in the seed file
* ```bundle exec rails db:setup```
    * runs db:schema:load, db:seed

* ```bundle exec rails db:drop```
    * drops all of the info in your database
* ```bundle exec rails db:rollback```
    * rolls everything back to the most recent migration
* ```bundle exec rails routes```
    * shows all routes defined in the routes file 


