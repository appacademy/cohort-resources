class Gif < ActiveRecord::Base
  validates :title, uniqueness: true, allow_nil: true
  validates :url, presence: true
end
