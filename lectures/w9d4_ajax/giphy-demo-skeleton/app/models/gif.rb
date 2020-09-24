class Gif < ActiveRecord::Base
  validates :title, uniqueness: true
  validates :url, presence: true
end
