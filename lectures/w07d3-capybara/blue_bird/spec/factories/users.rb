FactoryBot.define do
  factory :user do
    username {Faker::Movies::HarryPotter.character}
    password {'password'}
    age {25}
    coding_affiliation {Faker::Movies::HarryPotter.house}
    email {Faker::Internet.email}

    factory :harry_potter do
      username {'Harry Potter'}
    end
  end
  
end