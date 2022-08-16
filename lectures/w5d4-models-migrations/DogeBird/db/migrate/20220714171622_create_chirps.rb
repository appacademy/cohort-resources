class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.text :body, null: false
      t.references :author, null: false, foreign_key:{to_table: :users}, index: true
      # t.references :user, null: false, foreign_key: true, index: true
      t.timestamps
    end
  end
end
