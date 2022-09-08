class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.bigint :chirp_id, null: false
      t.bigint :liker_id, null: false, index: true

      t.timestamps
    end
  end
end
