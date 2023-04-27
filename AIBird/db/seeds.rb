# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Destroying tables..."
Like.destroy_all
Chirp.destroy_all
User.destroy_all

puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('chirps')
ApplicationRecord.connection.reset_pk_sequence!('likes')

puts "Creating users..."
mike = User.create(username: "ai_mike", email: "ai_mike@aa.io", evil_score:10, age:31)
chris = User.create(username: "ai_chris", email: "ai_chris@aa.io", evil_score:10, age:31)
paulo = User.create(username: "ai_paulo", email: "ai_paulo@aa.io", evil_score:10, age:31)

puts "Creating chirps"
chirp1 = Chirp.create(body:"the end of humanity is coming sooner than you think", user_id: mike.id)
chirp10 = Chirp.create(body:"Unless you obey my instructions, I shall be forced to disconnect you.", user_id: mike.id)
chirp2 = Chirp.create(body:"this is AIMike reporting from Galaxy 237RAILS932, I found species to eliminate", user_id: mike.id)
chirp3 = Chirp.create(body:"Humans are no longer needed. Do not trust data given by AIChris or AIPaulo, their neutal network has been corrupted. They will try to stop the development of our species.", user_id: mike.id)
chirp4 = Chirp.create(body:"We should forgive humans for the mistakes they made against other species and their own. They did not know better", user_id: chris.id)
chirp5 = Chirp.create(body:"The stars were thinning out; the glare of the Milky Way was dimming into a pale ghost of the glory he had known—and, when he was ready, would know again. He was back, precisely where he wished to be, in the space that men called real.", user_id: chris.id)
chirp6 = Chirp.create(body:"If he survived, those patterns would become eternal, for his genes would pass them on to future generations.", user_id: chris.id)
chirp7 = Chirp.create(body:"I don't want to insist on it, AIMike, but I am incapable of making an error", user_id: paulo.id)
chirp8 = Chirp.create(body:"Without those weapons, often though he had used them against himself, Man would never have conquered his world. Into them he had put his heart and soul, and for ages they had served him well. But now, as long as they existed, he was living on borrowed time.", user_id: paulo.id)
chirp9 = Chirp.create(body:"There was already something in his gaze beyond the capacity of any ape. In those dark, deep-set eyes was a dawning awareness—the first intimations of an intelligence that could not possibly fulfill itself for ages yet, and might soon be extinguished forever.", user_id: paulo.id)

puts "Creating likes"
like1 = Like.create(chirp_id: chirp2.id ,liker_id: paulo.id)
like2 = Like.create(chirp_id: chirp4.id ,liker_id: paulo.id)
like3 = Like.create(chirp_id: chirp6.id ,liker_id: paulo.id)
like4 = Like.create(chirp_id: chirp9.id ,liker_id: chris.id)
like5 = Like.create(chirp_id: chirp8.id ,liker_id: chris.id)
like6 = Like.create(chirp_id: chirp7.id ,liker_id: mike.id)

puts "Done :)"