# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  volume     :integer          not null
#  user_id    :bigint           not null
#  tea_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :tea
end
