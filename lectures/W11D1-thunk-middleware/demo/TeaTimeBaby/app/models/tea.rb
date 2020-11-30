class Tea < ApplicationRecord
    validates :flavor, :amount, presence: true
    validates :flavor, uniqueness: true
end
