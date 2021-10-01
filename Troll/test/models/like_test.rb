# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  tweet_id   :integer          not null
#  liker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
