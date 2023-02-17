# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do
  Tea.destroy_all

  green_tea = Tea.create!(flavor: "Green", price: 1.75, description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to other countries in East Asia.")
  oolong_tea = Tea.create!(flavor: "Oolong", price: 2.00, description: 'Oolong tea is a type of tea that is sometimes called "wulong" (also pronounced "oolong") or "black dragon" tea. Oolong teas are semi-oxidized teas. They are sometimes called "semi-fermented teas" though this moniker is considered to be less technically correct than semi-oxidized teas. After the tea leaves are picked, they are rolled and allowed to oxidize. Oxidation produces floral notes that characterize many oolongs.')
  earl_grey_tea = Tea.create!(flavor: "Earl Grey", price: 2.50, description: "Earl Grey tea is a tea blend which has been flavoured with the addition of oil of bergamot. The rind's fragrant oil is added to black tea to give Earl Grey its unique taste. Traditionally, Earl Grey was made from black teas such as China keemun and therefore intended to be drunk without milk. However, tea companies have since begun to offer Earl Grey based upon stronger teas such as Ceylons which are better suited to the addition of milk or cream. Other varieties have been introduced as well, such as green or oolong.")
  rooibos_tea = Tea.create!(flavor: "Rooibos", price: 3.00, description: "Rooibos (/ˈrɔɪbɒs/ ROY-boss; Afrikaans: [rɔːibɔs]; Aspalathus linearis), meaning 'red bush'; is a broom-like member of the plant family Fabaceae that grows in South Africa's fynbos. The leaves are used to make a herbal tea that is called by the names: rooibos (especially in Southern Africa), bush tea, red tea, or redbush tea (predominantly in Great Britain). The tea has been popular in Southern Africa for generations, but is now consumed in many countries worldwide. It is sometimes spelled rooibosch in accordance with the original Dutch for 'red bush'. The tea has a taste and color somewhat similar to hibiscus tea, with more or less of an earthy flavor like yerba mate.")
end