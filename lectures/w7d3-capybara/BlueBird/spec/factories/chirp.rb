FactoryBot.define do 
  factory :chirp do 
      body {"It's chirpalicious"} 
      # We know though that chirps rely on a user/author. 
      # FactoryBot makes this super easy for us with association syntax: 
      association :author, factory: :user 
  end 
   
end