class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :pokemon_id, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.integer :happiness, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :items, :pokemon_id
  end
end
