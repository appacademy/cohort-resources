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

    def body_too_long
        if body && body.length > 140
            errors[:body] << 'chirp is too long'
        end
    end

end
