class Gif < ApplicationRecord
  validates :title, :url, presence: true
  validates :title, uniqueness: true
end
