ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => "587",
  :tls => true, 
  :authentication => :plain,
  :enable_starttls_auto => true,
  :user_name => "noreply@realgravity.com",
  :password => "rg54321"
}
