# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Tea.destroy_all
  
  green_tea = Tea.create!(flavor: "green", amount: 1.75)
  oolong_tea = Tea.create!(flavor: "oolong", amount: 2.00)
  earl_grey_tea = Tea.create!(flavor: "earl grey", amount: 2.50)
  rooibos_tea = Tea.create!(flavor: "rooibos", amount: 3.00)
end