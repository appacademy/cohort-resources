# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  User.destroy_all
  
  # Instructors
  charis = User.create!(username: "chairs_are_people_too", age: 32, email: "those_are_teef@aa.io")
  sam = User.create!(username: "photogenic_sam", age: 27, email: "boulderz@aa.io")
  jack = User.create!(username: "jacked_jack", age: 31, email: "surfer_dude@aa.io")
  paulo = User.create!(username: "worlds_best_pal", age: 37, email: "peru_4ever@aa.io")
  chris = User.create!(username: "president_dellacqua", age: 27, email: "ballin@aa.io")
  andy = User.create!(username: "road_runner", age: 31, email: "meep_meep@aa.io")
  walker = User.create!(username: "wakka_wakka", age: 48, email: "wakka@wakka.walking")
  mike = User.create!(username: "like_mike", age: 54, email: "mike@aa.io")
  joe = User.create!(username: "joe_shmoe", age: 24, email: "regular_guy@vono.ru")

  Tweet.destroy_all

  # tweets
  tweet1 = Tweet.create!(author_id: walker.id, body: "Please use my messaging app, WalkerTalker, it's way better than Slack.")
  tweet2 = Tweet.create!(author_id: paulo.id, body: "Hello fellow instructors.")
  tweet3 = Tweet.create!(author_id: paulo.id, body: "Have you seen this sweet instructor merch?")
  tweet4 = Tweet.create!(author_id: jack.id, body: "Sweeeeeet.")
  tweet5 = Tweet.create!(author_id: mike.id, body: "Kahoots are an opportunity to mess with students.")
  tweet6 = Tweet.create!(author_id: charis.id, body: "Kahoots are the most important part of a/A .")
  tweet10 = Tweet.create!(author_id: andy.id, body: "Accuracy gets you on the podium. Speed gets you gold.")

  tweet7 = Tweet.create!(author_id: sam.id, body: "Follow my IG to learn how to be photogenic like me.")
  tweet8 = Tweet.create!(author_id: chris.id, body: "You can also check out my sweet game. It was made with JavaScript.")
  tweet9 = Tweet.create!(author_id: chris.id, body: "JavaScript is the best coding language.")

  tweet11 = Tweet.create!(author_id: paulo.id, body: "You're a wizard, instructor.")
  tweet12 = Tweet.create!(author_id: joe.id, body: "Bootcamps hate him. Solve all your programming woes with one weird hack. https://bit.ly/1sNZMwL")
  Like.destroy_all

  # Likes

  # Walker
  Like.create!(liker_id: sam.id, tweet_id: tweet4.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet5.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet6.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet7.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet8.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet9.id)
  Like.create!(liker_id: sam.id, tweet_id: tweet10.id)

  # Michelle
  Like.create!(liker_id: chris.id, tweet_id: tweet6.id)
  Like.create!(liker_id: chris.id, tweet_id: tweet7.id)
  Like.create!(liker_id: chris.id, tweet_id: tweet8.id)
  Like.create!(liker_id: chris.id, tweet_id: tweet9.id)
  Like.create!(liker_id: chris.id, tweet_id: tweet4.id)
  Like.create!(liker_id: chris.id, tweet_id: tweet10.id)

  # Mike
  Like.create!(liker_id: mike.id, tweet_id: tweet4.id)
  Like.create!(liker_id: mike.id, tweet_id: tweet5.id)
  Like.create!(liker_id: mike.id, tweet_id: tweet6.id)

  # Jen
  Like.create!(liker_id: charis.id, tweet_id: tweet5.id)
  Like.create!(liker_id: charis.id, tweet_id: tweet6.id)
  Like.create!(liker_id: charis.id, tweet_id: tweet10.id)

  # Big Company
  Like.create!(liker_id: paulo.id, tweet_id: tweet1.id)
  Like.create!(liker_id: paulo.id, tweet_id: tweet4.id)
  Like.create!(liker_id: paulo.id, tweet_id: tweet5.id)
  Like.create!(liker_id: paulo.id, tweet_id: tweet6.id)

  Like.create!(liker_id: jack.id, tweet_id: tweet7.id)
  Like.create!(liker_id: jack.id, tweet_id: tweet8.id)
  Like.create!(liker_id: jack.id, tweet_id: tweet9.id)
  Like.create!(liker_id: jack.id, tweet_id: tweet10.id)

  # Dean
  Like.create!(liker_id: andy.id, tweet_id: tweet10.id)
  Like.create!(liker_id: andy.id, tweet_id: tweet11.id)
