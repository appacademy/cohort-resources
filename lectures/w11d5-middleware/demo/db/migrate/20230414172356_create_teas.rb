class CreateTeas < ActiveRecord::Migration[7.0]
  def change
    create_table :teas do |t|
      t.string :flavor, null: false, index: { unique: true }
      t.float :price, null: false
      t.text :description
      t.timestamps
    end
  end
end
