# Steps for Success
1. Read the README.md
2. open Gemfile and add 'gem annotate'
3. 'bundle install' and 'rails db:setup'
    * do not start writing anything associations until fully setup
4. go to your models folder and go file by file, foreign key by foreign key.
5. if you see a foreign key, write its 'belongs to' association, then immediately go write its associate 'has many'. return to file w/ the foreign key and finish up for that file.
6. After all your associations for the froeign key are done => 'bundle exec rspec' 
7. go spec by spec and see if you named any incorrectly or have a 'has_many' where it shoudl be 'has_one'
8. tackle has_many throughs

# Working with Sqlite3
1. In order to go into a database that you need query from, you do: sqlite3 (name of database)
2. .tables shows all the tables that you're working with 
3. ".mode column" makes the output from the query calls more readable by returning the information in data form 
4. ".headers on" shows the names of each column so it makes it easier to see what each column represents 
5. Making a query call is simple, just write out the query call in vs code and copy and paste it into the terminal. Make sure that you place a semi colon at the end. 