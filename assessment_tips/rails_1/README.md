# Rails 1 
---
# General Tips
* This is a much harder assessment than the previous one
* READ THE README
* Take the practice assessment until you cant get any wrong answers
* Do one section at a time and close out all the tabs of the previous section when done
* Focus on understanding NOT memorization
---
# Assessment Tips
* Read the README
* Start with migrations then do associations
* Once you have spent the recommended time on a section, move on and come back later
---
# Common Bugs
1. Spelling
    * Are the association names spelled correctly?
    * Are the class names spelled correctly?
2. Is the name of the class in your association properly capitalized?
3. Am I missing any colons, commas?
4. Is it a has_one instead of a has_many association?
---
# Migrations
* Read the README
* Know your rails commands:
    * bundle exec rails g migration Change[Whatever]To[Whatever]
    * bundle exec rails db:migrate
* Do a separate migration for each table changed
* If you mess up, just start over
---
# Associations
* Read the README
* Find foreign key -> write belongs_to -> write corresponding has_one/has_many
    * After doing all of these, run specs and figure out naming discrepancies
* after doing the above, write has_many/throughs
* Care for missing/extra commas
    * They will cause all of the specs to fail
---
# SQL
* Read the README
* Read the question very carefully
* Read the error messages
* Get very familiar with joins
* Having and aggregators can only work after group by
---
# Active Record
* It is very similar to SQL
* When you do a joins, you are calling the names of the associations 
---
# Final thoughts
* Breathe
* You got This
* Study up


