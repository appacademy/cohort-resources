# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#
class Tea < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :flavor, :price, presence: true


  has_many :transactions,
    dependent: :destroy
  
end
