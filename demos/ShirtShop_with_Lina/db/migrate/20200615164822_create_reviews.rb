class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :user_id, null: false, index: {}
      t.integer :shirt_id, null: false, index: {}
      t.timestamps
    end
  end
end
