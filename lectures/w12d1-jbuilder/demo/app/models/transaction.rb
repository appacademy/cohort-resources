class Transaction < ApplicationRecord
  validates :quantity, presence: true

  belongs_to :tea,
    dependent: :destroy
  belongs_to :user,
    dependent: :destroy
end