class RemoveTitleFromChirps < ActiveRecord::Migration[7.0]
  def change
    remove_column :chirps, :title
  end
end
