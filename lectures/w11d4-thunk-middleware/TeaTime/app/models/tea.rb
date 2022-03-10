# == Schema Information
#
# Table name: teas
#
#  id         :bigint           not null, primary key
#  flavor     :string           not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tea < ApplicationRecord
    validates :flavor, :amount, presence: true
end
