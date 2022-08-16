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
    validate :body_too_long

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
        # optional: true

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like,
        dependent: :destroy

    def body_too_long
        if body && body.length > 140
            errors.add(:body, 'too long')
        end
    end

end
