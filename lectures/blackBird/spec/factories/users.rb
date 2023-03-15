# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#
FactoryBot.define do
  factory :user do
    username { Faker::Fantasy::Tolkien.character }
    email { Faker::Internet.email }
    age { 31 }
    password { 'password' }
  end
end
