class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.string :body, null: false
      # t.integer :user_id, null: false # old syntax
      t.references :user, null: false, foreign_key: true # user_id -> users table, also creates index
      # t.references :author, null: false, foreign_key: {to_table: :users} # author_id -> users table
      t.timestamps
    end
    # add_index :chirps, :user_id # not unique
  end
end
