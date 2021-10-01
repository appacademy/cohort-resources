# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  tweet_id   :integer          not null
#  liker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    belongs_to :tweet,
        primary_key: :id,
        foreign_key: :tweet_id,
        class_name: :Tweet

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
end
