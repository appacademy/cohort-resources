FactoryBot.define do
  factory :user do
    username { Faker::Movies::HarryPotter.character }
    email { 'email@aa.io' }
    password { 'password' }
    age { rand(11..100) }
    political_affiliation { Faker::Movies::HarryPotter.house }

    factory :harry_potter do
      username { 'Harry Potter' }
    end
  end
end