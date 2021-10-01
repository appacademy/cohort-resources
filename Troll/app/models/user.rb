# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  troll_score :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true

    has_many :tweets,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Tweet
    
    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :liked_tweets,
        through: :likes,
        source: :tweet

end

# user1.tweets will return the tweets of this user (tweets that have user1.id as author_id) #array of objects
