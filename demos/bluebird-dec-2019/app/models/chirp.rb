# == Schema Information
#
# Table name: chirps
#
#  id        :bigint           not null, primary key
#  body      :string(140)      not null
#  author_id :integer          not null
#

class Chirp < ApplicationRecord
    validates :body, :author_id, presence: true
    
    # custom validation using method
    validate :body_too_long

    belongs_to :author,
        primary_key: :id,       # always ID
        foreign_key: :author_id, 
        class_name: :User       # "User"
    
    has_many :likes, 
        primary_key: :id, 
        foreign_key: :chirp_id, 
        class_name: :Like

    # don't need attr readers in rails models

    def body_too_long
        if self.body && self.body.length > 140
            # errors hash provided by rails
            errors[:body] << "Sorry! Can't have more than 140 chars"
        end
    end

end
