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

ActiveRecord::Schema.define(version: 2020_01_16_190023) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chirps", force: :cascade do |t|
    t.string "body", limit: 140, null: false
    t.integer "author_id", null: false
    t.index ["author_id"], name: "index_chirps_on_author_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "chirp_id", null: false
    t.index ["liker_id", "chirp_id"], name: "index_likes_on_liker_id_and_chirp_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", limit: 100
  end

end
