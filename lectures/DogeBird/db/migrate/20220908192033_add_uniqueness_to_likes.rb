class AddUniquenessToLikes < ActiveRecord::Migration[7.0]
  def change
    add_index :likes, [:chirp_id, :liker_id], unique: true
  end
end
