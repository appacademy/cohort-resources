# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord 


    validates :body, presence: true 
    # preset validations
    validate :body_too_long
    # custom validations 

    belongs_to :author,
        primary_key: :id,  
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like,
        dependent: :destroy


    has_many :likers,
        through: :likes,
        source: :liker
        
        
    def body_too_long
        if body && body.length > 10
            errors.add(:body, "too long")
        end 
    end 
   
end 


