# == Schema Information
#
# Table name: likes
#
#  id       :bigint           not null, primary key
#  liker_id :integer          not null
#  chirp_id :integer          not null
#

class Like < ApplicationRecord
    validates :liker_id, :chirp_id, presence: true
    
    belongs_to :liker, 
        primary_key: :id, 
        foreign_key: :liker_id, 
        class_name: :User


    belongs_to :chirp, 
        primary_key: :id, 
        foreign_key: :chirp_id,
        class_name: :Chirp
end
