# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



# Users
darren = User.create!(
  username: "awesome_person", 
  email: "awesome_person@email.com", 
  
  age: 20, # definitely true
  coding_pref: "JavaScript",
  password: "123456"
)

diego = User.create!(
  username: "dieguccio", 
  email: "dieguccio@email.com", 
 
  age: 30, 
  coding_pref: "CSS",
  password: "123456"
)

taylor = User.create!(
  username: "cd", 
  email: "cd@ssbu.com", 

  age: 34, 
  coding_pref: "JavaScript",
  password: "123456"
)

mike = User.create!(
  username: "the_wizard", 
  email: "the_wizard@email.com", 
 
  age: 30, 
  coding_pref: "Ruby",
  password: "123456"
)

chris = User.create!(
  username: "chris", 
  email: "chris@email.com", 
 
  age: 45, 
  coding_pref: "Ruby",
  password: "123456"
)

paulo = User.create!(
  username: "squirelly", 
  email: "squirelly@email.com", 
  
  age: 30, 
  coding_pref: "JavaScript",
  password: "123456"
)

ayce = User.create!(
  username: "talk_to_the_hand", 
  email: "talk_to_the_hand@email.com", 

  age: 30, 
  coding_pref: "Ruby",
  password: "123456"
)

disnee = User.create!(
  username: "isme_disnee", 
  email: "disneeland@email.com", 
 
  age: 15, 
  coding_pref: "JavaScript",
  password: "123456"
)

sam = User.create!(
  username: "beep_boop", 
  email: "beep_boop@email.com", 
 
  age: 10, 
  coding_pref: "C++",
  password: "123456"
)

abby = User.create!(
  username: "shmabby", 
  email: "shmabby@email.com", 
  
  age: 25, 
  coding_pref: "JavaScript",
  password: "123456"
)

big_company = User.create!(
  username: "instructors_rock", 
  email: "instructors_rock@email.com", 
  
  age: 5, 
  coding_pref: "Instructors",
  password: "123456"
)


# chirps
chirp1 = Chirp.create!(author_id: diego.id, body: "Please use my messaging app, it's way better than Twitter.")
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


puts "seeds have been run!"