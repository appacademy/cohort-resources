# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# convert snake_case response from backend to camelcase for the frontend
Jbuilder.key_format camelize: :lower
