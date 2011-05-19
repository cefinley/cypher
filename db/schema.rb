# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110519131608) do

  create_table "rg_tasks", :force => true do |t|
    t.string   "provider"
    t.string   "schedule"
    t.string   "worktype"
    t.string   "namespace"
    t.string   "worker"
    t.string   "operation"
    t.string   "url"
    t.string   "schema"
    t.boolean  "skip_rehosting"
    t.boolean  "disable_validation"
    t.boolean  "update_if_exists"
    t.boolean  "incremental"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
