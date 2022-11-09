# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  email       :string           not null
#  coding_pref :string
#  age         :integer          not null
#
class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    # validates :column_name, validations.....


    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Chirp,
        dependent: :destroy

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy


    has_many :liked_chirps,
        through: :likes,
        source: :chirp 
        
        
    # has_many :chirp_likes,
    #     through: :chirps,
    #     source: :likes 

    # has_many :chirp_likers,
    #     through: :chirp_likes,
    #     source: :liker


end 
