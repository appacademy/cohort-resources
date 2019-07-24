class Item < ApplicationRecord
  validates :happiness, :image_url, :name, :price, presence: true
  validates :happiness, :price, numericality: true

  belongs_to :pokemon
end
