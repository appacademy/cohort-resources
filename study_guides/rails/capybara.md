# Setting up Capybara 

* Add Capybara to the 'test' group in your Gemfile and bundle install.
```ruby
group :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'capybara'
end
```
* rails g rspec: install
    * create  .rspec
    * create  spec
    * create  spec/spec_helper.rb
    * create  spec/rails_helper.rb

* Whenever you want to write new capybara tests, they'll go in the spec/features folder. This is important: the specs must be in this directory for the capybara methods to work.

* At the top of each file, you'll require the rails_helper:

```ruby 
# spec/features/authentication_spec.rb
require 'rails_helper'
```
* To run the tests individually, run rspec spec/features/{file_name}_spec.rb

# Setting up Shoulda-Matchers

* First, make sure that your Gemfile includes the shoulda-matchers gem:
```ruby 
group :test do
  gem 'shoulda-matchers'
  gem 'rspec-rails'
end
```
* require 'shoulda-matchers' at the top of your rails_helper.rb file.

* Next, we need to specify some configuration options in the rails_helper.rb file. We want to configure shoulda-matchers to use rspec as the testing framework, and to use the rails library (ActiveRecord, ActiveModel, and ActionController):

```ruby
Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      with.test_framework :rspec
      with.library :rails
    end
  end
```

# Important Methods
```ruby
Visiting a page - visit('/projects') - visit(post_comments_path(post))

Clicking - click_link('id-of-link') - click_link('Link Text') - click_button('Save') - click_on('Link Text') # clicks on either links or buttons - click_on('Button Value')

Forms - fill_in('id-of-input', with: 'whatever you want')

fill_in('Password', with: 'Seekrit')
fill_in('Description', with: 'Really Long Text...') - choose('A Radio Button') - check('A Checkbox') - uncheck('A Checkbox') - attach_file('Image', '/path/to/image.jpg') - select('Option', from: 'Select Box')
```
for more methods checkout the docs [capybara docs](https://rdoc.info/github/jnicklas/capybara#The_DSL)

# Factory Bot

# GOOD
```ruby
cat = FactoryBot.build(:cat)
```
* attributes, which are defined by a factory like so:

# my_app/spec/factories/cats.rb
```ruby
FactoryBot.define do
  factory :cat do # The name matters. :cat factory returns a Cat object.
    name 'Fluffy'
    color 'Dark Brown'
    email 'meow@meow.com'
    owner_id 1
    active true
    temperament 'mild'
  end
end
```
* These default values can be selectively overridden:
```ruby
evil_cat = FactoryBot.build(:cat, temperament: 'malicious')
```
# evil_cat.temperament => "malicious"
# evil_cat.name => "Fluffy"
This allows us to write to-the-point tests:

# my_app/spec/models/cat_spec.rb

```ruby
RSpec.describe Cat do
  it 'is valid when required attributes are present' do
    expect(FactoryBot.build(:cat)).to be_valid
  end

  context 'is invalid' do
    specify 'when name is blank' do
      expect(FactoryBot.build(:cat, name: '')).not_to be_valid
    end
    # ...
  end
end
```

# Creating Randomized Data

* If you want to generate a large batch of test data, you most likely want different attributes for each entry (rather than having 100 users with the name 'John Doe').

* To generate random names for our test users, we must pass a block that generates the random name string instead of passing the string value itself.

# in my_app/spec/factories/puppies.rb
```ruby
FactoryBot.define do
  factory :puppy do
    name { Faker::Name.name }
  end
end
```
