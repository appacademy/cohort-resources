class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :chirp_id, null: false 
    end
    
    add_index :likes, [:liker_id, :chirp_id], unique: true
  end
end
