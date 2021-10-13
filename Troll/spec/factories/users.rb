FactoryBot.define do

  # Faker is a gem that generates random fake data!
  # Faker has different categories (Movies, Internet, Quotes, etc.)

  factory :user do
    username { Faker::Movies::HarryPotter.character } # assigns user to the result of the block
    email { "Faker::Internet.email" } # different syntax, same result
    password { "password" }
    age { 20 }
  end

end