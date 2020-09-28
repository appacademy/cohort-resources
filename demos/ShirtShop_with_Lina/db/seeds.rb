# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Shirt.destroy_all 
Review.destroy_all 

shirt1 = Shirt.create(style:"Alvin's plaid shirt", price: 1000000, color: 'Black', image_url: 'alvin.jpg')
shirt2 = Shirt.create(style: "Erik's hawaiian bonanza", price:500000, color: 'Red', image_url: 'erik.jpg')
shirt3 = Shirt.create(style: "Joe's Brewery Collection", price:500000, color: 'Black', image_url: 'joe.jpeg')
shirt4 = Shirt.create(style: "Carlos' button up shirt", price:10000000000000, color: 'White', image_url: 'carlos.jpeg')



user1= User.create(name:'MAPA')
user2= User.create(name:'Daniel')
user3= User.create(name:'Leo Yulin Li_Official ')
user4= User.create(name:'Michael H')

review1 = Review.create(description: 'Not bad! Could be more Hawaiian', user_id: user1.id, shirt_id: shirt2.id)
review2 = Review.create(description: 'Best shirt eva!!!!!!!!', user_id: user2.id, shirt_id: shirt4.id)
review3 = Review.create(description: 'I guess it''s cool', user_id: user3.id, shirt_id: shirt3.id)
review4 = Review.create(description: 'Hello programmers !', user_id: user4.id, shirt_id: shirt1.id)