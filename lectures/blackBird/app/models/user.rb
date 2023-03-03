# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  age        :integer          not null
#
class User < ApplicationRecord 
    validates :username, :email, presence: true, uniqueness: true

    has_many :chirps,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Chirp


    has_many :likes, 
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy

    has_many :liked_chirps,
        through: :likes,
        source: :chirp

        # go through an association you already have!!!!


      



end 
# . new will just create an instance but not save it to the DB
# .save/ .save! this is when the validation will run


# Select 
# * 
# from chirps
# where 
# chirps.user_id = 1
# diego = User.new(username: "diego", email:"diego@gmail.com")
# diego.chirps


