# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower # ex: user_id -> userId
Jbuilder.deep_format_keys true # ex: user: {user_id: 2} -> user: {userId: 2}