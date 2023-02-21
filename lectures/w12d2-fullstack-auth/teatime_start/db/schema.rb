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

ActiveRecord::Schema[7.0].define(version: 2022_08_25_205459) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "tea_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tea_id", "user_id"], name: "index_likes_on_tea_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "teas", force: :cascade do |t|
    t.string "flavor", null: false
    t.float "price", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
  end

  add_foreign_key "likes", "teas"
  add_foreign_key "likes", "users"
  add_foreign_key "transactions", "teas"
  add_foreign_key "transactions", "users"
end
