class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user, foreign_key: true, null: false
      t.references :tea, foreign_key: true, null: false
      t.timestamps
    end
  end
end
