# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :bigint           not null
#  chirp_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  # no need for presence true on foreign_keys due to the belongs_to
  validates :liker_id, uniqueness: {scope: :chirp_id} # similar unique db constraint

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :chirp

end
