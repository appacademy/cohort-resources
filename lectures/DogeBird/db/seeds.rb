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
# We want to delete anything in our database we were using to test to keep it consistent 

# Users
mike = User.create!(username: 'michaelsoft', email: "pizzaman@msn.ca", favorite_coin: 'Ethereum', age: 99)
chris = User.create!(username: "chrismas", email: "tasty_chasetea@gmail.com", favorite_coin: 'Dogecoin', age: 11)
paulo = User.create!(username: 'paulito', email: 'newroom@aa.dev', favorite_coin: 'Dogecoin', age: 11)
abbey = User.create!(username: 'shmaybe', email: 'gale@geocities.com', favorite_coin: 'Ethereum', age: 11)
taylor = User.create!(username: 'taylor_made', email: 'craycray4taytay@hotmail.com', favorite_coin: 'Bitcoin', age: 3)
darren = User.create!(username: 'darelicte', email: 'capEtan@aa.io', favorite_coin: 'USD Coin', age: 79)
disnee = User.create!(username: 'disneeland', email: 'ilovedogs@yahoo.com', favorite_coin: 'Bitcoin', age: 19)
diego = User.create!(username: 'dieguccio', email: 'dieguccio@aol.org', favorite_coin: 'Bitcoin', age: 21)

# Chirps
chirp1 = Chirp.create!(author_id: mike.id, body: 'has this app been blessed by lord elon yet?')
chirp2 = Chirp.create!(author_id: paulo.id, body: 'we should name our app twinkle')
chirp3 = Chirp.create!(author_id: chris.id, body: '@paulito please no')
chirp4 = Chirp.create!(author_id: disnee.id, body: 'Wish I could be a dog and hang out with dogs all day')
chirp5 = Chirp.create!(author_id: taylor.id, body: '@disneeland please no')
chirp6 = Chirp.create!(author_id: abbey.id, body: 'I need a new phone number D:')
chirp7 = Chirp.create!(author_id: diego.id, body: 'San Francisco has the worst food in the country not even joking')
chirp8 = Chirp.create!(author_id: mike.id, body: 'Captain\'s log, stardate 45944.1. We have still not found any good pizza in the gamma quadrant.')
chirp9 = Chirp.create!(author_id: darren.id, body: 'Thanks @michaelsoft, I\'m addicted to super auto pets now')
chirp10 = Chirp.create!(author_id: chris.id, body: 'Has anyone lost their glasses? We found someone\'s glasses in Torvalds.')

# Likes
# Mike's likes
Like.create!(liker_id: mike.id, chirp_id: chirp3.id)
Like.create!(liker_id: mike.id, chirp_id: chirp5.id)
Like.create!(liker_id: mike.id, chirp_id: chirp9.id)

# Paulo's likes
Like.create!(liker_id: paulo.id, chirp_id: chirp1.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp7.id)
Like.create!(liker_id: paulo.id, chirp_id: chirp10.id)

# Abbey's likes
Like.create!(liker_id: abbey.id, chirp_id: chirp4.id)
Like.create!(liker_id: abbey.id, chirp_id: chirp6.id)
Like.create!(liker_id: abbey.id, chirp_id: chirp8.id)
Like.create!(liker_id: abbey.id, chirp_id: chirp10.id)

# Chris' likes
Like.create!(liker_id: chris.id, chirp_id: chirp2.id)
Like.create!(liker_id: chris.id, chirp_id: chirp4.id)
Like.create!(liker_id: chris.id, chirp_id: chirp5.id)
Like.create!(liker_id: chris.id, chirp_id: chirp6.id)
Like.create!(liker_id: chris.id, chirp_id: chirp10.id)

# Disnee's likes
Like.create!(liker_id: disnee.id, chirp_id: chirp6.id)
Like.create!(liker_id: disnee.id, chirp_id: chirp10.id)