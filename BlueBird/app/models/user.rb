# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  email      :string           not null
#

class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true 
    
end
