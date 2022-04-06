# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all # belongs to Chirps and Users
Chirp.destroy_all # belongs to Users
User.destroy_all # can exist on its own
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('chirps')
ActiveRecord::Base.connection.reset_pk_sequence!('users')


# Users
darren = User.new(
  username: "awesome_person",
  password: "password",
  email: "awesome_person@email.com", 
  
  age: 20, # definitely true
  coding_pref: "JavaScript"
)
darren.save!

diego = User.new(
  username: "diegous", 
  password: "password",
  email: "diegous@email.com", 
 
  age: 30, 
  coding_pref: "Ruby"
)
diego.save!

taylor = User.new(
  username: "dan_the_man", 
  password: "password",
  email: "dan_the_man@email.com", 

  age: 5, 
  coding_pref: "JavaScript"
)
taylor.save!

mike = User.new(
  username: "the_wizard",
  password: "password", 
  email: "the_wizard@email.com", 
 
  age: 30, 
  coding_pref: "CSS"
)
mike.save!

chris = User.new(
  username: "chris", 
  password: "password",
  email: "chris@email.com", 
 
  age: 45, 
  coding_pref: "Ruby"
)
chris.save!

paulo = User.new(
  username: "squirelly", 
  password: "password",
  email: "squirelly@email.com", 
  
  age: 30, 
  coding_pref: "JavaScript"
)
paulo.save!

ayce = User.new(
  username: "talk_to_the_hand", 
  password: "password",
  email: "talk_to_the_hand@email.com", 

  age: 30, 
  coding_pref: "Ruby"
)
ayce.save!

justin = User.new(
  username: "justin_gets_buckets", 
  password: "password",
  email: "justin_gets_buckets@email.com", 
 
  age: 15, 
  coding_pref: "JavaScript"
)
justin.save!

sam = User.new(
  username: "beep_boop", 
  password: "password",
  email: "beep_boop@email.com", 
 
  age: 10, 
  coding_pref: "C++"
)
sam.save!

greta = User.new(
  username: "adventursaurus", 
  password: "password",
  email: "adventursaurus@email.com", 
  
  age: 25, 
  coding_pref: "JavaScript"
)
greta.save!

big_company = User.new(
  username: "instructors_rock", 
  password: "password",
  email: "instructors_rock@email.com", 
  
  age: 100, 
  coding_pref: "Instructors"
)
big_company.save!


# chirps
chirp1 = Chirp.create!(author_id: darren.id, body: "Please use my messaging app, it's way better than Twitter.")
chirp2 = Chirp.create!(author_id: big_company.id, body: "Hello fellow instructors.")
chirp3 = Chirp.create!(author_id: big_company.id, body: "Have you seen this sweet instructor merch?")
chirp4 = Chirp.create!(author_id: taylor.id, body: "Sweeeeeet.")
chirp5 = Chirp.create!(author_id: mike.id, body: "Kahoots are an opportunity to mess with students.")

chirp6 = Chirp.create!(author_id: diego.id, body: "Raaaaaiiiils.")
chirp7 = Chirp.create!(author_id: taylor.id, body: "This is a random quote I found online. -Some person, 2020.")
chirp8 = Chirp.create!(author_id: darren.id, body: "JavaScript is the best coding language.")

chirp9 = Chirp.create!(author_id: diego.id, body: "Programmer: A machine that turns coffee into code.")
chirp10 = Chirp.create!(author_id: big_company.id, body: "You're a wizard, instructor.")


# Likes: last b/c dependent on both users and chirps

# diego
Like.create!(liker_id: diego.id, chirp_id: chirp1.id)
Like.create!(liker_id: diego.id, chirp_id: chirp4.id)
Like.create!(liker_id: diego.id, chirp_id: chirp6.id)
Like.create!(liker_id: diego.id, chirp_id: chirp8.id)
Like.create!(liker_id: diego.id, chirp_id: chirp9.id)

# taylor
Like.create!(liker_id: taylor.id, chirp_id: chirp6.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp7.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp8.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp4.id)

# darren
Like.create!(liker_id: darren.id, chirp_id: chirp4.id)
Like.create!(liker_id: darren.id, chirp_id: chirp5.id)
Like.create!(liker_id: darren.id, chirp_id: chirp8.id)

# mike
Like.create!(liker_id: mike.id, chirp_id: chirp5.id)
Like.create!(liker_id: mike.id, chirp_id: chirp6.id)

# Big Company
Like.create!(liker_id: big_company.id, chirp_id: chirp1.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp4.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp5.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp6.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp7.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp8.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp9.id)
