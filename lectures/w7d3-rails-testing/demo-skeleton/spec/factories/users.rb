FactoryBot.define do
  factory :user do
    username { 'bob' }
    email { 'bob@aol.com' }
    password { 'password' }
    age { 79 }
    favorite_coin { 'ethereum' }
  end
end