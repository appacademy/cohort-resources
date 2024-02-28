class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: { unique: true }
      t.string :email, null: false, index: { unique: true }
      t.integer :age, null: false
      t.string :coding_pref
      t.timestamps
    end
  end
end
