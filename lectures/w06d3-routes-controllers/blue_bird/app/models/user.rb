# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  age         :integer          not null
#  coding_pref :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :age, presence: true

  has_many :chirps,
    dependent: :destroy
   
  has_many :likes,
    foreign_key: :liker_id,
    dependent: :destroy

  def self.age_greater_than_18_but_less_than_60
    # User.where("age > 18 AND age < 60")
    User.select(:id, :username, :age).where(age: 19...60)
  end

  def self.coding_pref_is_not_c
    User.select(:id, :username, :coding_pref).where.not("coding_pref = (?)", "C")
  end

  def self.distinct_coding_prefs
    User.group(:coding_pref).pluck(:coding_pref)
  end

  def self.coding_prefs_in_list(*prefs)
    User.select(:id, :username, :coding_pref).where(coding_pref: prefs)
  end
end
