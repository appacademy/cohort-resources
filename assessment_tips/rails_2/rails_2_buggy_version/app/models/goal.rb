class Goal < ApplicationRecord

  validates :name, :details, :status, presence: true

  belongs_to :user
  
end
