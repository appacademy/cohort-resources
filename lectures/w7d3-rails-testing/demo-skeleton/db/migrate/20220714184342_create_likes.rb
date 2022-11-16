class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :chirp, null: false, foreign_key: true
      t.references :liker, null: false, foreign_key:{to_table: :users}
      t.index [:chirp_id, :liker_id], unique: true
      t.timestamps
    end
  end
end
