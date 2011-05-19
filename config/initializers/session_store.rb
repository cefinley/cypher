# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_cypher_session',
  :secret      => 'b2f75b6b57fb86063b620879d23ddaf53cc0c7585dd3f2ee79fdf78f100b525e7af89bc2a3aa31fe7f58c0f5678373b5b1fbec4e8ec556a9a9a770c664f3bfc1'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
