class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :tea_id, null:false
      t.integer :user_id, null:false
      t.integer :quantity, null:false

      t.timestamps
    end
    add_index :transactions, :tea_id
    add_index :transactions, :user_id
  end
end
