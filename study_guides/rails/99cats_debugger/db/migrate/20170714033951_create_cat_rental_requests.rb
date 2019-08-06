class CreateCatRentalRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :cat_rental_requests do |t|
      t.integer :cat_id, null: false
      t.date :end_date, null: false
      t.date :start_date, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :cat_rental_requests, :cat_id
  end
end
