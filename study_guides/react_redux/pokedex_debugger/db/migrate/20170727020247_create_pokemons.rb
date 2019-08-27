class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.integer :attack, null: false
      t.integer :defense, null: false
      t.string :poke_type, null: false
      t.string :moves, null: false, array: true, default: []
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
