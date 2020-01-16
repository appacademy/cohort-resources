# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the 'rails db:seed' command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy in order
Like.destroy_all 
Chirp.destroy_all 
User.destroy_all 

u1 = User.create(username: "angela", email: "a@aa.io")
u2 = User.create(username: "alissa", email: "gitkween@aa.io")
u3 = User.create(username: "carlos", email: "stretchyboi@aa.io")

c1 = Chirp.create(body: "time to commit and push", author_id: u2.id)
c2 = Chirp.create(body: "stretch time yall", author_id: u3.id)

l1 = Like.create(liker_id: u1.id, chirp_id: c1.id)
l2 = Like.create(liker_id: u1.id, chirp_id: c2.id)

