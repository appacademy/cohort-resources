class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :volume, null: false
      t.references :user, null: false, foreign_key: true
      t.references :tea, null: false, foreign_key: true
      t.timestamps
    end
  end
end
