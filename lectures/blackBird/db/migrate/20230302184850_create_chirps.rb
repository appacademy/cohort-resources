class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.text :body, null: false 
      # t.bigint :author_id, null: false 
      # t.references :author, null: false, foreign_key:{to_table: :users} 
      # :author the id will be added automatically, constraints, say which table were going to

      t.references :user, null:false, foreign_key: true 

      t.timestamps
    end
  end
end
