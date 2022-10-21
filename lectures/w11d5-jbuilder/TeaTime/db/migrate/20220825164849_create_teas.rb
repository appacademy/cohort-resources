class CreateTeas < ActiveRecord::Migration[7.0]
  def change
    create_table :teas do |t|
      t.string :flavor, null: false
      t.float :price, null: false
      t.string :description
      t.timestamps
    end
    add_index :teas, :flavor, unique: true
  end
end
