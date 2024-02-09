# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  age         :integer          not null
#  coding_pref :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :age, presence: true

  has_many :chirps,
    dependent: :destroy
   
  has_many :likes,
    foreign_key: :liker_id,
    dependent: :destroy
end
