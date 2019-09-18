class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :chirp_id, null: false
      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :chirp_id
  end
end
