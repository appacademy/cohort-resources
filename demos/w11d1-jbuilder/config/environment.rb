# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Camelize any snake_case key in a response from Jbuilder
Jbuilder.key_format camelize: :lower