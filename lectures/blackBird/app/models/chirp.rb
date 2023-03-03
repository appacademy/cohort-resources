# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord
    validates :body, presence: true 
    validates :user_id, presence: true
    # preset valdations

    validate :body_too_long
    # custom validation


    # when a table has a foreign_key you write a belongs to. 
    # primary key is always id
    # AFTER writing your belongs to. WRITE THE CORRESPONDING has_many,
    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User


        has_many :likes, 
            primary_key: :id,
            foreign_key: :chirp_id,
            class_name: :Like,
            dependent: :destroy
            # when the chirp is deleted, so are the likes 

        has_many :likers,
            through: :likes,
            source: :liker



    def body_too_long
        if body && body.length > 10
            errors.add(:body, "too long")
        end 
    end 


   



    
end 
