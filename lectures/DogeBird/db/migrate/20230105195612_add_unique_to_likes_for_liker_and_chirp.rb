class AddUniqueToLikesForLikerAndChirp < ActiveRecord::Migration[7.0]
  def change
    add_index :likes, [:liker_id, :chirp_id], unique: true
  end
end
