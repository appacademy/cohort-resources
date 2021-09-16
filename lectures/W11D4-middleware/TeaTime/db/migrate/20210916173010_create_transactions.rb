class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :tea_id, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
  end
end
