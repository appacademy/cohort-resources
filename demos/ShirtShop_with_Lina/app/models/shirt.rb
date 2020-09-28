# == Schema Information
#
# Table name: shirts
#
#  id         :bigint           not null, primary key
#  color      :string
#  image_url  :string
#  price      :float
#  style      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Shirt < ApplicationRecord
    has_many :reviews,
    foreign_key: :shirt_id, 
    class_name: :Review 
end
