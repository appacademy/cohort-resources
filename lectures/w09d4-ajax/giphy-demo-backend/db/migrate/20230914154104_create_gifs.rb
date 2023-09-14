class CreateGifs < ActiveRecord::Migration[7.0]
  def change
    create_table :gifs do |t|
      t.string :title, null: false, index: { unique: true }
      t.string :url, null: false

      t.timestamps
    end
  end
end
