# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :float            not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tea < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :price, presence: true

  has_many :transactions,
    dependent: :destroy
  has_many :likes,
    dependent: :destroy
  has_many :likers,
    through: :likes,
    source: :user
end
