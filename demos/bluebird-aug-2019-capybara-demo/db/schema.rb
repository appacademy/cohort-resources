# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_30_030208) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chirps", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_chirps_on_author_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "chirp_id", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["chirp_id"], name: "index_comments_on_chirp_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "chirp_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chirp_id", "user_id"], name: "index_likes_on_chirp_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "political_affiliation"
    t.integer "age"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
