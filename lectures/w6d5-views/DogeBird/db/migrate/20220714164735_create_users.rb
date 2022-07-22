class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string "username", null: false, index: {unique: true}
      t.string "email", null: false
      t.index "email", unique: true
      t.timestamps
    end
  end
end
