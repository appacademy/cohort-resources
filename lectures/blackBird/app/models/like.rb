# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  chirp_id   :bigint           not null
#  liker_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :chirp_id, uniqueness: {scope: :liker_id}

    belongs_to :chirp,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Chirp

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
end
