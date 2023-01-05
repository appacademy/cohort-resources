# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :bigint
#  chirp_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, uniqueness: {scope: :chirp_id}

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :chirp,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Chirp
end
