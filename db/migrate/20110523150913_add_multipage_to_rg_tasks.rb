class AddMultipageToRgTasks < ActiveRecord::Migration
  def self.up
    add_column :rg_tasks, :multi_page, :boolean
  end

  def self.down
    remove_column :rg_tasks, :multi_page
  end
end
