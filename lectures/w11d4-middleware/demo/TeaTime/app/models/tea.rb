class Tea < ApplicationRecord
    validates :flavor, :price, presence: true
end
