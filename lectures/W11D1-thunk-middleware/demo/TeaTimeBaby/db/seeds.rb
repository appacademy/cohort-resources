# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tea.destroy_all

tea1 = Tea.create!(flavor: 'Red Zinger', amount: 2.90)
tea2 = Tea.create!(flavor: 'Boba Tea', amount: 5.99)
tea3 = Tea.create!(flavor: 'HumpyDump', amount: 1.00)
tea4 = Tea.create!(flavor: 'Jasmine Green', amount: 4.99)
tea5 = Tea.create!(flavor: 'Not Coffee', amount: 10.00)