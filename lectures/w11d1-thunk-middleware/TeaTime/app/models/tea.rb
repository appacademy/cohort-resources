class Tea < ApplicationRecord
  validates :flavor, :amount, presence: true 
end
