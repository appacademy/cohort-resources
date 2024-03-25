# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.connection.reset_pk_sequence!('teas')
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('transactions')

oolong = Tea.create!(flavor: 'Oolong', price: 6.19, description: 'Smoky and delicious.')
ab = Tea.create!(flavor: 'Apricot Black', price: 14.65, description: 'The flavor you love with a fruity kick.')
rooibos = Tea.create!(flavor: 'Rooibos', price: 7.35, description: 'Straight out of South Africa')

darren = User.create!(email: 'deid@appacademy.io')
ayce = User.create!(email: 'alacap@appacademy.io')
diego = User.create!(email: 'dchavez@appacademy.io')

t1 = Transaction.create!(volume: 190, user: darren, tea: ab)
t2 = Transaction.create!(volume: 15, user: ayce, tea: oolong)
t3 = Transaction.create!(volume: 12, user: ayce, tea: rooibos)
t4 = Transaction.create!(volume: 45, user: diego, tea: ab)