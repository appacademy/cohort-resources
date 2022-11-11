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

ActiveRecord::Schema[7.0].define(version: 2022_11_04_020053) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chirps", force: :cascade do |t|
    t.text "body", null: false
    t.bigint "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_chirps_on_author_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "chirp_id", null: false
    t.bigint "liker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chirp_id", "liker_id"], name: "index_likes_on_chirp_id_and_liker_id", unique: true
    t.index ["chirp_id"], name: "index_likes_on_chirp_id"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "coding_pref"
    t.integer "age", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "chirps", "users", column: "author_id"
  add_foreign_key "likes", "chirps"
  add_foreign_key "likes", "users", column: "liker_id"
end
