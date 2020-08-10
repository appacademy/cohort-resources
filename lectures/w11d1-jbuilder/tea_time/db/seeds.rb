# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Tea.destroy_all
  User.destroy_all
  Transaction.destroy_all
  Like.destroy_all

  puts "Creating teas..."

  green_tea = Tea.create!(flavor: "Green", amount: 1.75, description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to other countries in East Asia.")
  oolong_tea = Tea.create!(flavor: "Oolong", amount: 2.00, description: 'Oolong tea is a type of tea that is sometimes called "wulong" (also pronounced "oolong") or "black dragon" tea. Oolong teas are semi-oxidized teas. They are sometimes called "semi-fermented teas" though this moniker is considered to be less technically correct than semi-oxidized teas. After the tea leaves are picked, they are rolled and allowed to oxidize. Oxidation produces floral notes that characterize many oolongs.')
  earl_grey_tea = Tea.create!(flavor: "Earl Grey", amount: 2.50, description: "Earl Grey tea is a tea blend which has been flavoured with the addition of oil of bergamot. The rind's fragrant oil is added to black tea to give Earl Grey its unique taste. Traditionally, Earl Grey was made from black teas such as China keemun and therefore intended to be drunk without milk. However, tea companies have since begun to offer Earl Grey based upon stronger teas such as Ceylons which are better suited to the addition of milk or cream. Other varieties have been introduced as well, such as green or oolong.")
  rooibos_tea = Tea.create!(flavor: "Rooibos", amount: 3.00, description: "Rooibos (/ˈrɔɪbɒs/ ROY-boss; Afrikaans: [rɔːibɔs]; Aspalathus linearis), meaning 'red bush'; is a broom-like member of the plant family Fabaceae that grows in South Africa's fynbos. The leaves are used to make a herbal tea that is called by the names: rooibos (especially in Southern Africa), bush tea, red tea, or redbush tea (predominantly in Great Britain). The tea has been popular in Southern Africa for generations, but is now consumed in many countries worldwide. It is sometimes spelled rooibosch in accordance with the original Dutch for 'red bush'. The tea has a taste and color somewhat similar to hibiscus tea, with more or less of an earthy flavor like yerba mate.")

  puts "Creating users..."

  ronil = User.create!(username: 'RoRo')
  jen = User.create!(username: 'JenKen')
  mike = User.create!(username: 'Mike "Madlad" Madsen')
  helen = User.create!(username: 'HELEN YU')
  michelle = User.create!(username: 'MishMosh')
  vanessa = User.create!(username: 'Vanz')
  walker = User.create!(username: 'Wakka')
  andy = User.create!(username: "Rayzah Blaydz")

  puts "Creating transactions..."

  # Green
  Transaction.create!(tea_id: green_tea.id, user_id: ronil.id, quantity: 1)
  Transaction.create!(tea_id: green_tea.id, user_id: michelle.id, quantity: 2)
  Transaction.create!(tea_id: green_tea.id, user_id: vanessa.id, quantity: 1)
  Transaction.create!(tea_id: green_tea.id, user_id: michelle.id, quantity: 3)

  # Oolong
  Transaction.create!(tea_id: oolong_tea.id, user_id: mike.id, quantity: 1)
  Transaction.create!(tea_id: oolong_tea.id, user_id: helen.id, quantity: 1)
  Transaction.create!(tea_id: oolong_tea.id, user_id: mike.id, quantity: 5)
  Transaction.create!(tea_id: oolong_tea.id, user_id: mike.id, quantity: 3)
  Transaction.create!(tea_id: oolong_tea.id, user_id: mike.id, quantity: 2)
  Transaction.create!(tea_id: oolong_tea.id, user_id: andy.id, quantity: 1)

  # Earl Grey
  Transaction.create!(tea_id: earl_grey_tea.id, user_id: andy.id, quantity: 1)
  Transaction.create!(tea_id: earl_grey_tea.id, user_id: ronil.id, quantity: 2)
  Transaction.create!(tea_id: earl_grey_tea.id, user_id: andy.id, quantity: 3)
  Transaction.create!(tea_id: earl_grey_tea.id, user_id: walker.id, quantity: 15)
  Transaction.create!(tea_id: earl_grey_tea.id, user_id: jen.id, quantity: 2)
  
  # Rooibos
  Transaction.create!(tea_id: rooibos_tea.id, user_id: jen.id, quantity: 2)
  Transaction.create!(tea_id: rooibos_tea.id, user_id: walker.id, quantity: 1)
  Transaction.create!(tea_id: rooibos_tea.id, user_id: jen.id, quantity: 3)
  Transaction.create!(tea_id: rooibos_tea.id, user_id: vanessa.id, quantity: 2)
  Transaction.create!(tea_id: rooibos_tea.id, user_id: helen.id, quantity: 1)

  puts "Creating likes..."

  # Green
  Like.create!(tea_id: green_tea.id, user_id: michelle.id)
  Like.create!(tea_id: green_tea.id, user_id: ronil.id)
  Like.create!(tea_id: green_tea.id, user_id: vanessa.id)
  Like.create!(tea_id: green_tea.id, user_id: helen.id)

  # Oolong
  Like.create!(tea_id: oolong_tea.id, user_id: mike.id)
  Like.create!(tea_id: oolong_tea.id, user_id: helen.id)

  # Earl Grey
  Like.create!(tea_id: earl_grey_tea.id, user_id: helen.id)
  Like.create!(tea_id: earl_grey_tea.id, user_id: ronil.id)
  Like.create!(tea_id: earl_grey_tea.id, user_id: andy.id)
  Like.create!(tea_id: earl_grey_tea.id, user_id: walker.id)

  # Rooibos
  Like.create!(tea_id: rooibos_tea.id, user_id: andy.id)
  Like.create!(tea_id: rooibos_tea.id, user_id: jen.id)
  Like.create!(tea_id: rooibos_tea.id, user_id: vanessa.id)
  Like.create!(tea_id: rooibos_tea.id, user_id: helen.id)
  Like.create!(tea_id: rooibos_tea.id, user_id: walker.id)
end