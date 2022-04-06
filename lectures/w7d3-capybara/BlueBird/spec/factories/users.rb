FactoryBot.define do 
    factory :user do 
        username {Faker::Fantasy::Tolkien.character}
        email {Faker::Internet.email}
        password {"password"}
        age {25}
        coding_pref {Faker::Fantasy::Tolkien.poem}
    end 
end 