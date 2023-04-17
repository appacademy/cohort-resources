class User < ApplicationRecord
  validates :username, presence: true

  has_many :transactions,
    dependent: :destroy
  
    
end