# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :decimal(8, 2)    not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tea < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :price, presence: true

  has_many :transactions

  has_many :purchasers,
    through: :transactions,
    source: :user
end
