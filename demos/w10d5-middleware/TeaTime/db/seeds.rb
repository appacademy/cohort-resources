# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Tea.destroy_all
  flavors = ['green','chai','english breakfast', 'earl gray', 'lavender','peppermint']
  amounts = (4.0..6.0)
  flavors.each do |flavor|
    Tea.create!(flavor: flavor, amount: rand(amounts).round(2) )
  end
end