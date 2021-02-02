# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# returns the Jbuilder object with camelCased keys
Jbuilder.key_format camelize: :lower