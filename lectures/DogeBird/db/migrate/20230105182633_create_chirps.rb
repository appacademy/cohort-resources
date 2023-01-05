class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.text :body, null: false
      t.references :author, null:false, foreign_key: {to_table: :users}
      # t.references :author, null:false, foreign_key: {to_table: :users}, index: {unique: true}
      # t.references :user, foreign_key: true #user_id
      # t.bigint :author_id, null: false
      t.timestamps
    end
    # add_index :chirps, :author_id
  end
end
