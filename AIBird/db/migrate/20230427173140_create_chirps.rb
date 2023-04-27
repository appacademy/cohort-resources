class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.text :body, null: false
      t.references :user, null: false, foreign_key: true
      # t.bigint :user_id, null: false

      # in case we wanted author_id or banana_id we need to specify table with: foreign_key: {to_table: :users}
      # t.references :author, null: false, foreign_key: {to_table: :users}, index: {unique: true}  #author_id
      t.timestamps  
    end
    # add_index :chirps, :body, unique: true ## in case we neeeded uniqueness in our db constrain
  end

end
