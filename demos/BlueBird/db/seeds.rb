# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

  User.destroy_all

  # Wizards
  hagrid = User.create!(username: 'Rubeus Hagrid', age: 45, political_affiliation: "Giant", email: "hagrid@hogwarts.io", password: 'password')
  harry = User.create!(username: 'Harry Potter', age: 11, political_affiliation: "Gryffindor", email: "harry@hogwarts.io", password: 'password')
  hermione = User.create!(username: 'Hermione Granger', age: 11, political_affiliation: "Gryffindor", email: "hermione@hogwarts.io", password: 'password')
  ron = User.create!(username: 'Ron Weasley', age: 11, political_affiliation: "Gryffindor", email: "ron@hogwarts.io", password: 'password')
  dumbledore = User.create!(username: "Albus Dumbledore", age: 93, political_affiliation: "Headmaster", email: "dumbledore@hogwarts.io", password: 'password')
  draco = User.create!(username: "Draco Malfoy", age: 11, political_affiliation: "Slytherin", email: "draco@hogwarts.io", password: 'password')
  nimbus = User.create!(username: "Nimbus", age: 45, email: "brooms@nimbus.io", political_affiliation: "no affiliation", password: 'password')
  andy = User.create!(username: "Andy", age: 100, email: "andy@aa.io", political_affiliation: "Jedi", password: 'password')

  Chirp.destroy_all

  # Chirps
  chirp1 = Chirp.create!(author_id: hagrid.id, body: "You're a wizard, Harry.")

  chirp2 = Chirp.create!(author_id: harry.id, body: "I solemnly swear I am up to no good.")

  chirp3 = Chirp.create!(author_id: hermione.id, body: "It’s wingardium leviOsa, not leviosAH.")
  chirp4 = Chirp.create!(author_id: hermione.id, body: "We could all have been killed or worse, expelled.")
  chirp5 = Chirp.create!(author_id: hermione.id, body: "Just because you have the emotional range of a teaspoon doesn’t mean we all have.")

  chirp6 = Chirp.create!(author_id: dumbledore.id, body: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.")
  chirp7 = Chirp.create!(author_id: dumbledore.id, body: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.")
  chirp8 = Chirp.create!(author_id: dumbledore.id, body: "It is our choices, Harry, that show what we truly are, far more than our abilities.")
  chirp9 = Chirp.create!(author_id: dumbledore.id, body: "Happiness can be found even in the darkest of times if only one remembers to turn on the light.")

  chirp10 = Chirp.create!(author_id: nimbus.id, body: "Nimbus 2000s are (quite literally) flying off the shelves - get them while they're hot!")
  chirp11 = Chirp.create!(author_id: nimbus.id, body: "Buy your broomstick from a brand you trust. Choose Nimbus.")
  chirp12 = Chirp.create!(author_id: nimbus.id, body: "If you're a seeker you'll love our new stick. Weave your way through the opponent with the best aerodynamics a broomstick has ever seen!")

  chirp13 = Chirp.create!(author_id: andy.id, body: "Am I the only one who doesn't like Harry Potter?")
  chirp14 = Chirp.create!(author_id: andy.id, body: "Give me Star Wars any day")

  Like.destroy_all

  # Likes
  
  # Hagrid
  Like.create!(user_id: hagrid.id, chirp_id: chirp3.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp4.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp5.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp6.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp7.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp8.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp9.id)
  Like.create!(user_id: hagrid.id, chirp_id: chirp14.id)

  # Harry
  Like.create!(user_id: harry.id, chirp_id: chirp6.id)
  Like.create!(user_id: harry.id, chirp_id: chirp7.id)
  Like.create!(user_id: harry.id, chirp_id: chirp8.id)
  Like.create!(user_id: harry.id, chirp_id: chirp9.id)
  Like.create!(user_id: harry.id, chirp_id: chirp3.id)
  Like.create!(user_id: harry.id, chirp_id: chirp4.id)
  Like.create!(user_id: harry.id, chirp_id: chirp10.id)
  Like.create!(user_id: harry.id, chirp_id: chirp11.id)
  Like.create!(user_id: harry.id, chirp_id: chirp12.id)
  Like.create!(user_id: harry.id, chirp_id: chirp14.id)


  # Hermione
  Like.create!(user_id: hermione.id, chirp_id: chirp3.id)
  Like.create!(user_id: hermione.id, chirp_id: chirp4.id)
  Like.create!(user_id: hermione.id, chirp_id: chirp5.id)
  Like.create!(user_id: hermione.id, chirp_id: chirp14.id)

  # Ron
  Like.create!(user_id: ron.id, chirp_id: chirp3.id)
  Like.create!(user_id: ron.id, chirp_id: chirp10.id)
  Like.create!(user_id: ron.id, chirp_id: chirp14.id)

  # Dumbledore
  Like.create!(user_id: dumbledore.id, chirp_id: chirp3.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp4.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp5.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp6.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp7.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp8.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp9.id)
  Like.create!(user_id: dumbledore.id, chirp_id: chirp14.id)

  # Draco
  Like.create!(user_id: draco.id, chirp_id: chirp10.id)
  Like.create!(user_id: draco.id, chirp_id: chirp12.id)
  Like.create!(user_id: draco.id, chirp_id: chirp13.id)
  Like.create!(user_id: draco.id, chirp_id: chirp14.id)

  # Comments
  Comment.create(body: 'Wow! What a magnificent play on words!', author_id: hermione.id, chirp_id: chirp10.id)
  Comment.create(body: 'The Nimbus 2000 is incredible - smoothest broom I\'ve ever flown on', author_id: harry.id, chirp_id: chirp10.id)
  Comment.create(body: 'Bloody hell @harry, have you seen this.', author_id: ron.id, chirp_id: chirp10.id)
  Comment.create(body: 'I will pay you money not to sell this to Harry Potter', author_id: draco.id, chirp_id: chirp10.id)
  Comment.create(body: 'You are saying what we are all thinking', author_id: draco.id, chirp_id: chirp14.id)
end
