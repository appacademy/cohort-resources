# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Tea.destroy_all
  # User.destroy_all
  # Transaction.destroy_all
  # Like.destroy_all

  puts "Creating teas..."

  green_tea = Tea.create!(flavor: "Green", amount: 1.75)
  oolong_tea = Tea.create!(flavor: "Oolong", amount: 2.00) 
  earl_grey_tea = Tea.create!(flavor: "Earl Grey", amount: 2.50)
  rooibos_tea = Tea.create!(flavor: "Rooibos", amount: 3.00)

  # puts "Creating users..."

  # ryan = User.create!(username: 'Mapa')
  # jen = User.create!(username: 'JenKen')
  # erik = User.create!(username: 'erik')
  # lina = User.create!(username: 'lina')
  # julia = User.create!(username: 'julia')
  # zack = User.create!(username: 'zack')
  # charlos = User.create!(username: 'charlos')
  # anonymous = User.create!(username: "anony")

  # puts "Creating transactions..."

  # Green
  # Transaction.create!(tea_id: green_tea.id, user_id: ryan.id, quantity: 1)
  # Transaction.create!(tea_id: green_tea.id, user_id: julia.id, quantity: 2)
  # Transaction.create!(tea_id: green_tea.id, user_id: zack.id, quantity: 1)
  # Transaction.create!(tea_id: green_tea.id, user_id: julia.id, quantity: 3)

  # # Oolong
  # Transaction.create!(tea_id: oolong_tea.id, user_id: erik.id, quantity: 1)
  # Transaction.create!(tea_id: oolong_tea.id, user_id: lina.id, quantity: 1)
  # Transaction.create!(tea_id: oolong_tea.id, user_id: erik.id, quantity: 5)
  # Transaction.create!(tea_id: oolong_tea.id, user_id: erik.id, quantity: 3)
  # Transaction.create!(tea_id: oolong_tea.id, user_id: erik.id, quantity: 2)
  # Transaction.create!(tea_id: oolong_tea.id, user_id: anonymous.id, quantity: 1)

  # # Earl Grey
  # Transaction.create!(tea_id: earl_grey_tea.id, user_id: anonymous.id, quantity: 1)
  # Transaction.create!(tea_id: earl_grey_tea.id, user_id: ryan.id, quantity: 2)
  # Transaction.create!(tea_id: earl_grey_tea.id, user_id: anonymous.id, quantity: 3)
  # Transaction.create!(tea_id: earl_grey_tea.id, user_id: charlos.id, quantity: 15)
  # Transaction.create!(tea_id: earl_grey_tea.id, user_id: jen.id, quantity: 2)
  
  # # Rooibos
  # Transaction.create!(tea_id: rooibos_tea.id, user_id: jen.id, quantity: 2)
  # Transaction.create!(tea_id: rooibos_tea.id, user_id: charlos.id, quantity: 1)
  # Transaction.create!(tea_id: rooibos_tea.id, user_id: jen.id, quantity: 3)
  # Transaction.create!(tea_id: rooibos_tea.id, user_id: zack.id, quantity: 2)
  # Transaction.create!(tea_id: rooibos_tea.id, user_id: lina.id, quantity: 1)

  # puts "Creating likes..."

  # # Green
  # Like.create!(tea_id: green_tea.id, user_id: julia.id)
  # Like.create!(tea_id: green_tea.id, user_id: ryan.id)
  # Like.create!(tea_id: green_tea.id, user_id: zack.id)
  # Like.create!(tea_id: green_tea.id, user_id: lina.id)

  # # Oolong
  # Like.create!(tea_id: oolong_tea.id, user_id: erik.id)
  # Like.create!(tea_id: oolong_tea.id, user_id: lina.id)

  # # Earl Grey
  # Like.create!(tea_id: earl_grey_tea.id, user_id: lina.id)
  # Like.create!(tea_id: earl_grey_tea.id, user_id: ryan.id)
  # Like.create!(tea_id: earl_grey_tea.id, user_id: anonymous.id)
  # Like.create!(tea_id: earl_grey_tea.id, user_id: charlos.id)

  # # Rooibos
  # Like.create!(tea_id: rooibos_tea.id, user_id: anonymous.id)
  # Like.create!(tea_id: rooibos_tea.id, user_id: jen.id)
  # Like.create!(tea_id: rooibos_tea.id, user_id: zack.id)
  # Like.create!(tea_id: rooibos_tea.id, user_id: lina.id)
  # Like.create!(tea_id: rooibos_tea.id, user_id: charlos.id)
end