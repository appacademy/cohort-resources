class CreateChirps < ActiveRecord::Migration[5.2]
  def change
    create_table :chirps do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :chirps, :author_id
  end
end
