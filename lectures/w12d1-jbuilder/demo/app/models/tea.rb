class Tea < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :flavor, :price, presence: true


  has_many :transactions,
    dependent: :destroy
  
end
