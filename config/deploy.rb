require "capistrano/ext/multistage"
require "bundler/capistrano"
# RVM https://rvm.beginrescueend.com/integration/capistrano/
$:.unshift(File.expand_path('./lib', ENV['rvm_path']))
require "rvm/capistrano"

set :stages, ['staging', 'production']

set :application, "client_portal"
set :repository,  "git@github.com:realgravity/client_portal.git"
set :scm, :git
set :deploy_via, :remote_cache

set :rvm_ruby_string, '1.8.7'
set :bundle_without,  [:development, :test, :cucumber]

set :user, 'appuser'
set :use_sudo, false
set :deploy_to, "/home/#{user}/#{application}"

depend :remote, :file, "#{shared_path}/config/database.yml"

after "deploy:update_code", "deploy:install"

namespace :deploy do
  desc "Start the thin application servers."
  task :start, :roles => ['app'] do
    run %Q{cd "#{current_release}" && bundle exec thin -C config/thin.yml start}
  end
  task :stop, :roles => ['app'] do
    run %Q{cd "#{current_release}" && bundle exec thin -C config/thin.yml stop}
  end
  task :restart, :roles => ['app'] do
    run %Q{cd "#{current_release}" && bundle exec thin -O -C config/thin.yml restart}
  end

  task :install, :roles => ['app'] do
    run %Q{cd "#{current_release}" && RAILS_ENV=#{stage} bundle exec rake deploy:install}
  end

  task :apache, :roles => ['app'] do
    sudo %Q{ sudo a2dissite default; \
             sudo cp #{current_release}/config/apache/client_portal-#{stage} /etc/apache2/sites-available/client_portal; \
             sudo a2ensite client_portal; \
             sudo cp #{current_release}/config/apache/force_ssl /etc/apache2/sites-available/force_ssl; \
             sudo a2ensite force_ssl; \
             sudo /etc/init.d/apache2 restart }
  end

end

namespace :maintenance do
  task :start, :roles => [:app] do
    run %Q{cd "#{current_release}" && cp public/maintenance.html public/system/}
  end
  task :stop, :roles => [:app] do
    run %Q{cd "#{current_release}" && rm -f public/system/maintenance.html}
  end
end

require 'right_aws'
$: << File.expand_path('../../lib', __FILE__)
require 'capistrano/aws/cluster'
require 'pp'
namespace :aws do
  task :check do
    app_server_ips = parent.roles[:app].map(&:host)
    elb_name       = ENV['ELB'] ? ENV['ELB'] : load_balancer
    cluster        = Capistrano::Aws::Cluster.new(elb_name, app_server_ips)

    puts "\n===== Cluster Information for ELB: #{elb_name}"
    puts "Configuration defines #{app_server_ips.size} App Servers: #{app_server_ips * ', '}"
    puts "Load Balancer has #{cluster.load_balancer_count} Instances."
    puts ""

    cluster.server_map.each do |ip, info|
      if info[:aws_instance_id]
        puts("  #{info[:aws_instance_id]}")
        puts("    IP: %-18s Private IP: %s" % [info[:ip_address], info[:private_ip_address]])
        puts("    Groups: #{info[:aws_groups] * ', '}")
        if info[:elb_health]
          puts("    LB Status: #{info[:elb_health][:state]}")
        else
          puts("    LB Status: **NOT IN LOAD BALANCER**")
        end
        unless app_server_ips.include?(ip)
          puts("    ** ACTIVE NODE NOT IN CONFIGURATION **")
        end
      else
        puts "  ** NO INSTANCE INFORMATION FOUND FOR #{ip} **"
      end
    end
    puts
  end
  task :list do
    instances = Capistrano::Aws::all_instances

    puts "\n===== All Instance Information"
    puts "Found #{instances.size} Instances."
    puts ""

    instances.values.each do |info|
      puts("  #{info[:aws_instance_id]}")
      puts("    IP: %-18s Private IP: %s" % [info[:ip_address], info[:private_ip_address]])
      puts("    Groups: #{info[:aws_groups] * ', '}")
    end
    puts
  end

end


Dir[File.join(File.dirname(__FILE__), '..', 'vendor', 'gems', 'hoptoad_notifier-*')].each do |vendored_notifier|
  $: << File.join(vendored_notifier, 'lib')
end

require 'hoptoad_notifier/capistrano'
