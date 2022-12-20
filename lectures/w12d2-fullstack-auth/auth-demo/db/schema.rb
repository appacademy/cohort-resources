# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_20_181133) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "teas", force: :cascade do |t|
    t.string "flavor", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.index ["flavor"], name: "index_teas_on_flavor", unique: true
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "quantity", null: false
    t.bigint "tea_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tea_id"], name: "index_transactions_on_tea_id"
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "transactions", "teas"
  add_foreign_key "transactions", "users"
end
