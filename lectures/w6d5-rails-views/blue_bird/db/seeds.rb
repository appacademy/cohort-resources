# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all 
Chirp.destroy_all
User.destroy_all 
# We want to delete anything in our database we were using to test to keep a consistent 

# Users
mike = User.create!(
    username: 'professor_of_logic', 
    email: "mike@aa.io",
    coding_affiliation: 'JavaScript', 
    age: 49
)

chris = User.create!(
    username: "president_dellacqua", 
    email: "ballin@aa.io", 
    coding_affiliation: 'Python',
    age: 12
)

sam = User.create!(
    username: 'Samsung',
    email: 'info@samsung.com',
    coding_affiliation: 'JavaScript',
    age: 0
)

taylor = User.create!(
    username: 'taylor_made',
    email: 'craycray4taytay@hotmail.com',
    coding_affiliation: 'JavaScript',
    age: 30
)

paulo = User.create!(
    username: 'paulito',
    email: 'bocanegra_grande@gmail.com',
    coding_affiliation: 'SQLite',
    age: 106
)

jack = User.create!(
    username: 'jack_attack',
    email: 'jack_eggburt@aa.io',
    coding_affiliation: 'C#',
    age: 79
)

# Chirps
chirp1 = Chirp.create!(author_id: mike.id, body: 'Star Trek is wayyy better than Star Wars')
chirp2 = Chirp.create!(author_id: chris.id, body: 'Yer a lizard, Harry')
chirp3 = Chirp.create!(author_id: sam.id, body: 'LG is trash, yo')
chirp4 = Chirp.create!(author_id: taylor.id, body: 'Oh boy, I love rails!')
chirp5 = Chirp.create!(author_id: paulo.id, body: 'I got stuck on Abyss Watchers in DS3!')
chirp6 = Chirp.create!(author_id: jack.id, body: 'Just snowed in Vail, gonna hit the slops today')
chirp7 = Chirp.create!(author_id: mike.id, body: 'Picard is the GOAT')
chirp8 = Chirp.create!(author_id: jack.id, body: 'Wish I could go surfing in CO')
chirp9 = Chirp.create!(author_id: sam.id, body: 'Going on a roadtrip!')
chirp10 = Chirp.create!(author_id: taylor.id, body: 'Has anyone seen my shoes?')

# Likes
# Chris' likes
Like.create!(liker_id: chris.id, chirp_id: chirp5.id)
Like.create!(liker_id: chris.id, chirp_id: chirp8.id)
Like.create!(liker_id: chris.id, chirp_id: chirp10.id)

# Sam's likes
Like.create!(liker_id: sam.id, chirp_id: chirp2.id)
Like.create!(liker_id: sam.id, chirp_id: chirp4.id)
Like.create!(liker_id: sam.id, chirp_id: chirp7.id)

# Taylor's likes
Like.create!(liker_id: taylor.id, chirp_id: chirp2.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp3.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp6.id)
Like.create!(liker_id: taylor.id, chirp_id: chirp8.id)

# Paulo's likes
Like.create!(liker_id: paulo.id, chirp_id: chirp2.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp4.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp6.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp9.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp10.id)

# Jack's likes
Like.create!(liker_id: jack.id, chirp_id: chirp2.id)
Like.create!(liker_id: jack.id, chirp_id: chirp9.id)