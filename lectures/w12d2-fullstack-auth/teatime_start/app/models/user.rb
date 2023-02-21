# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true
  
    has_many :transactions,
      dependent: :destroy
    has_many :likes,
      dependent: :destroy
    has_many :liked_teas,
      through: :likes,
      source: :tea
  end