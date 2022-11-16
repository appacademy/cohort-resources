FactoryBot.define do
  factory :user do
    username { Faker::Fantasy::Tolkien.character }
    email { 'bob@aol.com' }
    password { 'password' }
    age { 79 }
  end
end