class CreateRgTasks < ActiveRecord::Migration
  def self.up
    create_table :rg_tasks do |t|
      t.string :provider
      t.string :schedule
      t.string :worktype
      t.string :namespace
      t.string :worker
      t.string :operation
      t.string :url
      t.string :schema
      t.boolean :skip_rehosting
      t.boolean :disable_validation
      t.boolean :update_if_exists
      t.boolean :incremental

      t.timestamps
    end
  end

  def self.down
    drop_table :rg_tasks
  end
end
