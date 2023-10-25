# W7D3: Rails Testing
#### (and Capybara)

---

## Learning Goals

1. Describe the testing pyramid and TDD
1. Understand how to test Rails models
1. Understand how to test Rails controllers
1. Understand how to test Rails features
1. Utilize libraries like FactoryBot and Faker
1. **_Be able to read the specs on Rails 2_**

---

![capy](https://media.istockphoto.com/id/177228186/photo/young-capybara.jpg?s=612x612&w=0&k=20&c=MaLAlTZA3N5fa2Gp2FeCdZCwSbCLXkVVeKTks7IJIgM=)

---

# Why Write Tests?

1. Ensure code works
1. Prevent regressions
1. Promote collaboration
1. Build documentation

---

## Test-Driven Development (TDD)

1. Red
1. Green
1. Refactor

---

## The Testing Pyramid

```v
   /  End-to-End Tests (5%) \
  /  Integration Tests (15%) \
 /      Unit Tests (80%)      \
```

Note:
- If we write good, comprehensive unit tests, then we don't have to write as many integration tests, and barely any E2E tests.
- Always ask "WHAT IS THIS THING RESPONSIBLE FOR?"
	- That's what we should be testing

---

# Rails Testing

* What are the components we typically create in Rails?
  * Models, Views, and Controllers
* What tests do we write for each of these?
	* Models => unit tests
  * Views => unit tests**
  * Controllers => request/integration tests
* How do we test all three components at once?
	* End-to-end system tests (using Capybara)

---

## Setup: Gemfile (part 1)

```ruby
# my_app/Gemfile

group :development, :test do
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'factory_bot_rails'
end
```

---

## Setup: Gemfile (part 2)

```ruby
# my_app/Gemfile

group :test, do
  gem 'capybara' # included with system tests
  gem 'selenium-webdriver' # included with system tests
  gem 'webdrivers' # included with system tests
  gem 'faker'
  gem 'launchy'
end
```

* Note that these are in addition to the standard development gems.
* Last but not least, don't forget to `bundle install`!

---

## Setup: RSpec

* `rails g rspec:install`
	* creates files/directories within app for housing tests

```ruby
	my_app/
    	.rspec
    	spec/
        	spec_helper.rb
        	rails_helper.rb
```

* Update the `.rspec` file with additional options
	* We strongly recommend `--color` and `--format documentation`

---

## Setup: Database

* `rails db:create`
	* creates both development and test databases
* note that `rails db:migrate` only affects the development database
	* use `rails db:migrate RAILS_ENV=test` to run migrations on the test database, **or**
  * use `rails db:test:load` to load the schema onto the test database

---

## Setup: FactoryBot/Shoulda Matchers

```ruby
  # spec/rails_helper.rb
  # Add additional requires below this line...
  require 'shoulda-matchers'
  require 'capybara/rspec'

  RSpec.configure do |config|
    config.include FactoryBot::Syntax::Methods
  end

  Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      with.test_framework :rspec
      with.library :rails
    end
  end
```

---

# Demo #1: Setup

---

## Unit Testing: Models

* Small in scope
  * Tests only touch model code
  * Tests can touch the database
* Things to test
  * Validations / error messages
  * Associations
  * Class AND instance methods (not private)
  
---

## Shoulda Matchers

*Validations*

```ruby
  it { should validate_presence_of(:username) }
  it { should validate_length_of(:password).is_at_least(6) }
```

*Associations*

```ruby
it { should have_many(:chirps) }
it { should belong_to(:user) }
```

---

## FactoryBot & Faker (part 1)

* FactoryBot is a replacement for Rails fixtures - predefined sets of data that can be fed into unit tests
* Specific factories are defined in `spec/factories/`
	* `spec/factories/users.rb`, for example
  
```ruby
  FactoryBot.define do 
      factory :user do 
          username {Faker::Fantasy::Tolkien.character}
          email {Faker::Internet.email}
          password {"password"}
      end 
  end 
```

Note:
- so how we use this factory that we've created?

---

## FactoryBot & Faker (part 2)

* Factories can be invoked using either `create` or `build`
	* `create` will hit the database, whereas `build` will not
* Only use `create` if a test requires the existence of data in the database

---

## Demo #2: Model Tests

---

## Integration Testing: Requests (part 1)

* Used to be the norm to test controllers in  isolation
* New standard is writing request tests
	* check for certain content after a given  HTTP request
* Written in the scope of:
  * routes, controllers, database, views
* Useful for testing:
  * status codes
  * rendering
  * response under various conditions (e.g. valid and invalid params)

---

## Integration Testing: Requests (part 2)

* Single test typically consists of a request and assertion
	* Request:
  		* `get new_user_url`
    	* `post_users_url, params: { ... }`
  * Assertion:
  	* `expect(response.body).to include("...")`
    * `expect(response).to redirect_to(root_url)`
    * see also: `render_template`, `have_http_status`, `be_success`, `change`, etc.
    
---

## Demo #3: Request Tests

---

## End-to-End Testing: System

* Simulates how a real user would interact with app
* Test in a "headless" browser (no actual UI)
	* Capybara can open a real browser for debugging (`save_and_open_page`)

---

## Capybara API (part 1)

* Navigation
  * `visit`
  * `click_on`
* Forms
  * `fill_in "field", with: "value"`
  * `choose`, `check`, `uncheck`
  * `select "option", from: "select box"`

---

## Capybara API (part 2)

* Assertions
  * `have_content`
  * `current_path`
  * `page`
* Debugging
  * `save_and_open_page`
* [And much more!](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/RSpecMatchers)

---

## Demo #4: System Tests (Capybara)