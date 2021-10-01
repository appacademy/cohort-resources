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

    # # Find all tweets for a particular user
    # User.first #returns User Object
    # User.first.tweets
    # Tweet.joins(:author).where(users: {username: "worlds_best_pal"})
    # #Find all tweets liked by people politically affiliated with JavaScript
    # Tweet
    #   .joins(:likers)
    #   .where(users: {political_affiliation: "JavaScript"})
    #   .select("tweets.*, users.political_affiliation")

    # tweets = Tweet
    #   .joins(:likers)
    #   .where(users: {political_affiliation: "JavaScript"})
    
    # # can chain on #select later because the tweets query above has not evaluated yet.
    # expanded_tweets = tweets.select("users.political_affiliation")

    # expanded_tweets.first.political_affiliation

    # #Get only the unique values from the previous query
    # Tweet
    #   .joins(:likers)
    #   .where(users: {political_affiliation: "JavaScript"})
    #   .distinct

    #   # where(users: {political_affiliation: "Javascript"})

    # Find all tweets with no likes
    # Tweet
    #   .left_outer_joins(:likes)
    #   .where(likes: {id: nil})

    # #Find how many likes each tweet has
    # Tweet
    #   .joins(:likes)
    #   .group(:id)
    #   .select(:id)

    # #Find tweets with at least 3 likes. Use pluck.
    # Tweet
    #   .joins(:likes)
    #   .group(:id)
    #   .having("COUNT(*) >= ?", 3)
    #   .pluck(:body)

    # Tweet
    #   .joins(:likes)
    #   .group(:id)
    #   .having("COUNT(*) >= ?", 3)
    #   .select(:body)



    ############
    # Joins and Includes Demo
    
    #Show all tweet authors
    def self.see_all_tweet_authors
      tweets = Tweet.all

      tweets.each do |tweet|
        puts tweet.author.username
      end
    end

    def self.see_all_tweet_authors_optimized
      tweets = Tweet.all.includes(:author).distinct

      tweets.each do |tweet|

        puts tweet.author.username
      end
    end


    #Show number of likes for each tweet
    def self.see_num_likes
      tweets = Tweet.all

      tweets.each do |tweet|
        puts tweet.likes.length
      end
    end

    def self.see_num_likes_optimized
      tweets_with_likes = Tweet
        .joins(:likes)
        .group(:id)
        .select("tweets.id, COUNT(*) as num_likes")

      tweets_with_likes.each do |tweet|
        puts tweet.num_likes
      end
    end
   

end

