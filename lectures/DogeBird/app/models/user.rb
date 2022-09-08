# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  username      :string           not null
#  email         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  favorite_coin :string           not null
#
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  #validates :email, :username, presence: true, uniqueness: true     <== also valid

  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :liked_chirps,
    through: :likes,
    source: :chirp

  has_many :chirp_likers,
    through: :chirps,
    source: :likers

end
