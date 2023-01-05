class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :liker, foreign_key: {to_table: :users}
      t.references :chirp, foreign_key: true
      # t.integer :liker_id, null: false
      # t.integer :chirp_id, null: false
      t.timestamps
    end
  end
end
