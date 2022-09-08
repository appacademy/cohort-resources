class CreateChirp < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.bigint :author_id, null: false, index: true
      t.timestamps
    end
  end
end
