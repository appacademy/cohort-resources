class Transaction < ApplicationRecord
  validates :quantity, presence: true

  belongs_to :tea
  belongs_to :user
end
