class CreateTrolls < ActiveRecord::Migration[5.2]
  def change
    create_table :trolls do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :trolls, :author_id
  end
end
