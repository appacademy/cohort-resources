# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chirp < ApplicationRecord
    validates :body, presence: true
    validate :body_too_long

    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like 

    has_many :likers,
        through: :likes,
        source: :user 

    def body_too_long
        if body && body.length > 140
            errors[:body] << 'chirp is too long'
        end
    end

end
