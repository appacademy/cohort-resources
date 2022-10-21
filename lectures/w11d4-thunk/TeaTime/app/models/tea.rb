class Tea < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :price, presence: true

  
end
