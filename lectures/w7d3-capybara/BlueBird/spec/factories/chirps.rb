FactoryBot.define do 
    factory :chirp do 
        body {"its chirpalisio"}
        association :author, factory: :user
    end
end 