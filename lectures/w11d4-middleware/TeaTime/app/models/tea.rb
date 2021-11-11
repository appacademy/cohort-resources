# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  cost        :float            not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tea < ApplicationRecord
    validates :flavor, presence:true, uniqueness: true
    validates :cost, presence:true
    
    has_many :transactions
end
