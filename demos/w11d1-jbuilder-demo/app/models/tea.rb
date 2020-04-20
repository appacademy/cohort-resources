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
    validates :flavor, presence: true, uniqueness: true
    validates :amount, presence: true

    has_many :transactions #transaction_ids to get all the ids for the associated transactions (Rails MAGIC yay!)
    has_many :likes
    has_many :likers,
      through: :likes,
      source: :user
end
