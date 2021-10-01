# == Schema Information
#
# Table name: tweets
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tweet < ApplicationRecord
    validates :body, :author_id, presence:true
    validate :body_too_long
    def body_too_long
        if body && body.length > 140
            debugger
            errors[:body] << "too long"
        end
    end 

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :tweet_id,
        class_name: :Like

        #users that liked the tweet:
    has_many :likers, 
        through: :likes,
        source: :liker
end

#tweet1.author will return one instance of User (the user with the id of this tweet.author_id)

