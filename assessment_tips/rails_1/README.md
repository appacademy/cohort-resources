# Steps for Success
1. Read the README.md
2. Open Gemfile and add 'gem annotate'
3. Run 'bundle install' and './setup_db.sh'
    * do not start writing anything associations until fully setup
    * if you need to re-setup your db, use rails db:drop to drop your database, then re-run './setup_db.sh'
4. Go to your models folder and go file by file, foreign key by foreign key.
5. If you see a foreign key, write its 'belongs_to' association, then immediately go write its associated 'has_many'.
6. After all your associations for the foreign keys are done => 'bundle exec rspec' 
7. Go spec by spec and see if you named any incorrectly or have a 'has_many' where it should be 'has_one'
8. Tackle 'has_many throughs'

# Working with Sqlite3
1. In order to go into a database that you need query from, you do: sqlite3 (name of database)
2. .tables shows all the tables that you're working with 
3. ".mode column" makes the output from the query calls more readable by returning the information in data form 
4. ".headers on" shows the names of each column so it makes it easier to see what each column represents 
5. Making a query call is simple, just write out the query call in vs code and copy and paste it into the terminal. Make sure that you place a semi colon at the end. 

# Common Bugs
1. Spelling
    * Are the association names spelled correctly?
    * Are the class names spelled correctly?
2. Is the name of the class in your association properly capitalized?
3. Am I missing any colons, commas?
4. Is it a has_one instead of a has_many association?

# Other Tips
1. Familiarize yourself with the file tree
    * Your models are under the App folder
    * The schema is under the db folder
2. Use Command + T for quick file finder
3. Find a strategy/approach that works for you