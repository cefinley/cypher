class RgTask < ActiveRecord::Base
  validates_presence_of :task_title
  validates_length_of :task_title, 
    :maximum => 45
  validates_presence_of :provider
  validates_length_of :provider, 
    :maximum => 45
  validates_presence_of :schedule
  validates_format_of :schedule, 
    :with => /\Acron\(.{0,25}/x, 
    :on => :create, 
    :message => "requires cron object. ie cron( 22 18, 18 * * * )"
  validates_presence_of :worktype
  validates_length_of :worktype, 
    :maximum => 45
  
  def self.displayable_courses
      find(:all)
  end
end
