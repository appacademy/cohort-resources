class Tea < ApplicationRecord
  validates :flavor, :amount, presence: true
  validates :flavor, uniqueness: true

  has_many :transactions
  has_many :likes
  has_many :likers,
    through: :likes,
    source: :user
end
