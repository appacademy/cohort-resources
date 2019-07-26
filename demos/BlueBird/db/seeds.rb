# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Chirp.destroy_all
  Like.destroy_all

  users = []

  jennifer = User.create!(username: "that_fish", email: 'jenken@gmail.com')
  users << jennifer

  andy = User.create!(username: 'the_real_andy', email: 'andy@gmail.com')
  users << andy
  
  mike = User.create!(username: 'squeakycheese', email: 'cheesecurds@gmail.com')
  users << mike

  dean = User.create!(username: 'call_me_matt', email: 'mattdean@gmail.com')
  users << dean

  ronil = User.create!(username: "ro_your_boat", email: 'ro_your_boat@gmail.com')
  users << ronil

  ryan = User.create(username: "mapa_tofu", email: 'i_am_mapa@gmail.com')
  users << ryan
  
  elliot = User.create!(username: "smelliot", email: 'smiz@gmail.com')
  users << elliot
  
  angela = User.create!(username: "sd2berkeley", email: 'angelatin@gmail.com')
  users << angela

  carlos = User.create(username: "stretchy_boi", email: 'father_stretch_my_hands@gmail.com')
  users << carlos

  quotes = []

  until quotes.length == 13
    quotes << Faker::ChuckNorris.fact.slice(0, 140)
    quotes.uniq!
  end

  Chirp.create!(author_id: mike.id, body: quotes.pop)
  Chirp.create!(author_id: mike.id, body: quotes.pop)
  Chirp.create!(author_id: andy.id, body: quotes.pop)
  Chirp.create!(author_id: ryan.id, body: quotes.pop)
  Chirp.create!(author_id: ryan.id, body: quotes.pop)
  Chirp.create!(author_id: jennifer.id, body: quotes.pop)
  Chirp.create!(author_id: ronil.id, body: quotes.pop)
  Chirp.create!(author_id: carlos.id, body: quotes.pop)
  Chirp.create!(author_id: carlos.id, body: quotes.pop)
  Chirp.create!(author_id: dean.id, body: quotes.pop)
  Chirp.create!(author_id: elliot.id, body: quotes.pop)
  Chirp.create!(author_id: andy.id, body: quotes.pop)
  Chirp.create!(author_id: angela.id, body: quotes.pop)

  Chirp.all.each do |chirp|
    users = User.all.to_a
    (5..7).to_a.sample.times do
      random_user = users.sample
      users.delete(random_user)
      Like.create(user_id: random_user.id, chirp_id: chirp.id)
    end
  end
end