class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :liker, null: false, foreign_key: {to_table: :users}, index: false
      t.references :chirp, null: false, foreign_key: true
      t.timestamps
    end
    # creating a unique constraint on the COMBINATION of liker and chirp
    # one person cant like the same chirp more than once
    # actual index is on liker_id
    add_index :likes, [:liker_id, :chirp_id], unique: true
  end
end
