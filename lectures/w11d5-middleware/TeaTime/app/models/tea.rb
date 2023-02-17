# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
class Tea < ApplicationRecord
  validates :flavor, uniqueness: true
  validates :flavor, :price, presence: true
end
