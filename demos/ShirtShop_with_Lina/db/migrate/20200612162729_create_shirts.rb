class CreateShirts < ActiveRecord::Migration[5.2]
  def change
    create_table :shirts do |t|
      t.string :style
      t.float :price

      t.timestamps
    end
  end
end
