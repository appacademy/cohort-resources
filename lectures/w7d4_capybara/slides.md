# W7D4 - Capybara

![capybaras on grass](https://get.pxhere.com/photo/grass-group-meadow-cute-wildlife-wild-zoo-fur-mammal-eat-rodent-fauna-close-up-outdoors-woods-rodents-animals-vertebrate-capybara-hydrochoerus-hydrochaeris-royalty-free-images-1143560.jpg)

---

## Learning Goals

1. Know what a Capybara is
1. Reinforce testing pyramid and TDD
1. Understand how to test Rails models
1. Understand how to test Rails controllers
1. Become familiar with the Capybara testing library
1. **_Be able to read the specs on Rails 2_**

---

## What is a Capybara?

![capybara with birds and turtles](https://img.cutenesscdn.com/640/ppds/dc0727e1-48ee-499f-acb8-17b1629917f4.jpg)

Note:
* A gentle, adorable, water-loving South American mammal that is also the world's largest rodent.
* Can weight up to 200 pounds
* very social creatures
* I expect you all to use the `:capybara:` emoji on Slack today.

---

## Ugly cousin of the Wombat

![cute wombat](https://cdn.hipwallpaper.com/m/2/91/I2vCxP.jpg)

---

## Testing Review

![mommy capybara with babies](https://www.zooborns.com/.a/6a010535647bf3970b0133ece6466d970b-800wi)

---

### Why Write Tests?

1. Make sure your code works!
1. Prevent regressions
1. Easier collaboration
1. Built-in documentation

![lazy capybaras](https://c1.staticflickr.com/7/6016/5926723263_4364178ac2_b.jpg)


---

### The Testing Pyramid

```v
   /  End-to-End Tests \
  /  Integration Tests  \
 /      Unit Tests       \
```

![capybara pyramid](http://gianthamster.com/wp-content/uploads/2012/03/2012_02_29_03_sGariFilming.jpg)

---

### TDD

1. Red
1. Green
1. Refactor

![capybaras in crosswalk](https://i.imgur.com/KYsKNe6.jpg)


---

## Rails Testing

* What are the components we typically create in Rails?
  * Models, Controllers, and Views (features)

![capybara with monkeys on back](https://dementiasherpa.com/wp-content/uploads/2018/03/Monkeys-ride-capybara-10102012-jpg_114738.jpg)


---

## Basic Setup: Adding Testing Gems

* Add RSpec and other testing gems to Gemfile and run `bundle install`
 ```ruby
  # my_app/Gemfile

  group :development, :test do
    gem 'rspec-rails'
    gem 'rails-controller-testing'
    gem 'capybara' # end-to-end feature testing
    gem 'shoulda-matchers' # simple syntax for model tests
    gem 'factory_bot_rails' # easily create test objects
    gem 'faker' # generate random data for testing
    gem 'launchy' # enable save_and_open_page
  end
 ```

Note:
  * `rspec-rails` - allows you to use RSpec in rails; when you bundle install and initialize `spec/` directory with `rails generate rspec:install` it adds three files - .rspec file, spec folder, spec_helper.rb, and rails_helper
  * `rails-controller-testing` - extra methods for testing controllers
  * `capybara` - test application by simulating how real user interacts with app
  * `shoulda-matchers` - provides RSpec one-liners to test common Rails functionality, easy to read, clean error-messages, requires configuration
  * `factory_bot_rails` - factory method for test subjects, requires some configuration documented in readings; dont need to worry about seed data for testing
  * `faker` - easily generate random data
  * `launchy` - launches external applications from within ruby programs

---

## Basic Setup: Database, RSpec, and Test Files

* Set up a test database, if necessary
  * `rails db:create` to create development and test databases
  * `rails db:test:load` to sync test DB after migrations
* Install RSpec using `rails generate rspec:install`
  * `.rspec`, `spec/`, `spec_helper.rb`, `rails_helper.rb`
* Auto-Generate Test Files
  * change the `config/application.rb` file

Note:
* TEST DB - used for tests
* DEVELOPMENT DB - used for `rails console` and `rails server`
* `spec_helper.rb` - for specs that don't depend on rails
* `rails_helper.rb` - for specs that do depend on rails
---
## Basic Setup: Configurations 
`application.rb`
``` 
config.generators do |g|
    g.test_framework :rspec, #Tells rails to use rspec for testing
      :fixtures => false, 
      :view_specs => false,
      :helper_specs => false,
      :routing_specs => false,
      :controller_specs => true,
      :request_specs => false
     g.fixture_replacement :factory_bot, :dir => "spec/factories"
  end
  ```
---

`rails_helper.rb`

```
Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      with.test_framework :rspec
      with.library :rails
    end
  end
```
  
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

## Code Demo - Model Testing

![capybara with stuffed capybara](http://fuzzytoday.com/wp-content/uploads/2011/01/2010_09_15_01_scaplinplushcaplin.jpg)

---

## Shoulda Matchers syntax

### validations
```ruby
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
```
### associations

```ruby
it { should have_many(:chirps) }
it { should belong_to(:user) }
```

---

## Integration Testing: Controllers

* Scope:
	* controllers, routes, models, database
  * does not test views
* Useful for testing:
	* status codes
  * rendering
  * under various conditions (e.g. Valid and invalid params)


---

## Rails Controller Testing API

* Navigation
  * get
  * post
  * patch
  * delete
* Assertions
  * render_template
  * redirect_to
  * have_http_status, be_success

---

## Navigation Syntax

(http request) :(controller action), (params)

```ruby
get :new
post :create, params: { user: { username: "harry_potter" } }
```

---

## Code Demo - Controller Testing

![mokey riding capybara](https://img.cutenesscdn.com/640/ppds/f12c07ba-e3f4-46ca-a97b-dc12539f731e.jpg)


---

## End-to-End Testing: Features

* Simulates how a real user would interact with app
* Test in a "headless" browser (no actual UI)
* Capybara can open a real browser for debugging (`save_and_open_page`)

![capybara with aligator](https://img.cutenesscdn.com/640/ppds/cb92be4c-f43e-4294-9895-146b711863b0.jpg)


---

## Capybara Under the Hood

![ruby testing ecosystem](http://altoros.github.io/images/posts/2014-07-29-ruby-integration-testing-tools-population-census/2010.png)



---

## Capybara API

* Navigation
  * `visit`
  * `click_on`
* Forms
  * `fill_in "field", with: "value"`
  * `choose`, `check`, `uncheck`
  * `select "option", from: "select box"`



---

## Capybara API

* Assertions
  * `have_content`
  * `current_path`
  * `page`
* Debugging
  * `save_and_open_page`
* [And much more!](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/RSpecMatchers)


---

## Capybara - RSpec Conventions

Capybara changes the names of some of RSpec's standard methods to reflect it's specific testing purpose.

* `#describe` => `#feature`
* `#it` => `#scenario`
* `#before` => `#background`

---

## Code Demo - Feature Testing (Capybara)

![capybara yuzu bath](https://img.cutenesscdn.com/640/ppds/4376b122-1ab2-42c8-b964-05f4a445db8a.jpg)

Note:

* Walk through feature specs
* Demo `save_and_open_page`
* Difference between `chirps_url` and `chirps_path`
  * `chirp_url`: `localhost:3000/chirps`
  * `chirp_path`: `/chirps`

---

# Recap
