class AddRunNow < ActiveRecord::Migration
  def self.up
    add_column :rg_tasks, :run_now, :string
  end

  def self.down
    remove_column :rg_tasks, :run_now
  end
end
