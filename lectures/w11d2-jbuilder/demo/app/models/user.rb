class User < ApplicationRecord
  validates :username, presence: true

  has_many :transactions
  has_many :likes
  has_many :liked_teas,
    through: :likes,
    source: :tea
end
