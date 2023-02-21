# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  price      :float            not null
#  tea_id     :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
    validates :quantity, presence: true
  
    belongs_to :tea,
      dependent: :destroy
    belongs_to :user,
      dependent: :destroy
  end