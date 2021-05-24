class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :tea_id, null: false

      t.timestamps
    end

    add_index :likes, [:tea_id, :user_id], unique: true
    add_index :likes, :user_id
  end
end
