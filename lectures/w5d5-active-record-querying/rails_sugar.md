# Rails Syntactic Sugar Guide
One of the jarring things about Rails is that it doesn’t look like Ruby anymore. The parentheses disappear. There are colons everywhere; sometimes they are on the left side, and sometimes they’re on the right side. What’s important to remember is that it’s still Ruby and we are still calling methods the same way as before, it’s just obscured with a lot of syntactic sugar to make the code cleaner visually. Below are some examples of syntactic sugar and the explicit method calls they are hiding.

Lots of details are noted below, but the main takeaway is we are still calling regular Ruby methods, and sometimes we pass in hashes as arguments. For a quick rundown, just look at the code examples below with the explicit syntax with the parantheses/curly braces vs the syntactic sugar which is minimalistic.

## Hashes
One key to interpreting code within Rails is the syntactic sugar for hashes. When the keys of a hash are symbols they can be rewritten from the standard hash:
```ruby
  dog = {
    :name => :Fido,
    :age => 4,
    :greeting => 'Bow wow',
    :boolean => true
  }
```

to an alternative syntax:
```ruby
  dog = {
    name: :Fido,
    age: 4,
    greeting: 'Bow wow',
    boolean: true
  }
```

These both result in the same hash.

<br/>

## Migrations
```ruby 
class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string(:title, {:null => false}) # no syntactic sugar
      t.integer(:yr, {null: false}) # a bit of sugar on the hash
      t.float :score, null: false #full syntactic sugar
      t.integer :votes, null: false
      t.integer :director_id, null: false
    end

    #these unique modifiers are bad practice for this particular example; they're just here to display the syntactic sugar
    add_index(:movies, :director_id, {unique: true})
    add_index :movies, :title, unique: true
  end
end
```
`t.string`, etc. are methods that take in a `:column_name` and a options hash. The options hash are key-value pairs.

<br/>

## Associations
```ruby
class Actor < ApplicationRecord
  has_many (:castings,
    {foreign_key: :actor_id,
    class_name: :Casting})
  
  has_many :movies,
    through: :castings,
    source: :movie
end
```
`belongs_to`, `has_many`, etc. are methods that take in a name that the association will be called as, and an options hash to specify how the association will connect one model to another. Just a reminder that the `primary_key` can be skipped; Rails will automatically set `primary_key` to `:id` under the hood.

<br/>

## ActiveRecord Queries
```ruby
# == Schema Information
# Table name: movies
#  id          :bigint           not null, primary key
#  title       :string           not null
#  yr          :integer          not null
#  score       :float            not null
#  votes       :integer          not null
#  director_id :integer          not null
#
# Table name: actors
#  id   :bigint           not null, primary key
#  name :string           not null

# Query that returns Ford movies where he is not the lead actor, where the score is within a range of 7 to 10, and the director_id is 360.

# without syntactic sugar. note the extra curly braces
 Movie
    .joins(:actors)
    .where({actors: { name: 'Harrison Ford' }}, {score: 7..10}, {director_id: 360})
    .where.not({castings: { ord: 1 }})

#with syntactic sugar
  Movie
    .joins(:actors)
    .where(actors: { name: 'Harrison Ford' }, score: 7..10, director_id: 360)
    .where.not(castings: { ord: 1 })

#Just use SQL strings if you forget how to use the ActiveRecord syntax. 
  Movie
    .joins(:actors)
    .where("actors.name = 'Harrison Ford' AND (score BETWEEN 7 AND 10) AND (director_id = 360)") 
    .where("castings.ord != 1") 
    # extra parantheses between the AND's are optional but helpful for organization
```
`.where` and other methods such as `.having` can take in a hash as an argument. The keys are the column names, and the values are what the row should equal or the range it should be within. If a field from another table is being considered, it is represented as a nested hash, with the outer key being the foreign table. Note the extra curly braces in the explicit example which are tucked away with the syntactic sugar version.

For reference, the above queries are equivalent to the SQL query below:
```sql
SELECT 
  movies.* 
FROM 
  movies
JOIN 
  castings ON castings.movie_id = movies.id 
JOIN
  actors ON actors.id = castings.actor_id
WHERE 
  actors.name = 'Harrison Ford' 
  AND (movies.score BETWEEN 7 AND 10)
  AND (movies.director_id = 360)
  AND castings.ord != 1
```