# Steps for Success
1. Read the README.md
2. Run ```bundle install```
3. Run ```bundle exec rails db:create``` to create your database
4. Run ```bundle exec rails g model <ModelName>```
    * Model names are CamelCase and singular
    * This will create your model and migration files
    * Run this for each model you need. Refer to the README.md for what models you will need.
5. Fill out your migration files with appropriate columns, db constraints, and foreign keys!
6. Run ```bundle exec rails db:mgrate db:test:load```
7. Fill out your model with the appropriate validations and associations
8. Run ```bundle exec rails g controller <ControllersName>``` to generate your controllers
    * remember to also generate a controller for Sessions
9. Fill out your routes.rb
    * run ```rails routes``` to check your routes
10. Run the specs according to the README.md!


# Common Bugs
1. erb tags
    * extra % 
    * Are you using the returning erb tag?
    * do you have ```<% end %>``` for your blocks?
2. quotes in your html syntax
3. copy/pasting 
    * make sure there are no typos in your copy/paste
4. spelling/syntax errors
5. are you referring to the correct method names?
    * are there ! at the end of your method  names that you're forgetting?


# Other General Tips
* Make sure to do your models, controllers, then views
* Make sure to run your specs in order
* Get your migrations/schemas right the first time
* Get a good grasp of the flow of the whole process from building out the database to the models then the controllers, then the views
* know how to use the form authenticity token
* know how to render errors in your views
* understand how to deal with nested vs non-nested routes
* practice debugging, do the buggy version!
* read the errors!
* Use Command + T for quick file finder
