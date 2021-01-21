class Gif < ActiveRecord::Base
  validates :title, uniqueness: true, presence: true
  validates :url, presence: true
end
