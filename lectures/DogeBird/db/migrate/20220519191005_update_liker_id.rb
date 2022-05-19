class UpdateLikerId < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :liker_id
    add_index :likes, [:chirp_id, :liker_id], unique: true
  end
end
