class AddMyColumnToRgTasks < ActiveRecord::Migration
  def self.up
    add_column :rg_tasks, :task_title, :string
  end

  def self.down
    remove_column :rg_tasks, :task_title
  end
end
