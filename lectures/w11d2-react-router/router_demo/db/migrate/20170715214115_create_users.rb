class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_column :todos, :user_id, :integer
    Todo.all.each { |todo| todo.update(user_id: 0) }
    change_column :todos, :user_id, :integer, null: false
    add_index :todos, :user_id
  end
end
