FactoryBot.define do
  factory :chirp do
    body {"It's chirpalicious"}
    association :author, factory: :user
  end
  
end