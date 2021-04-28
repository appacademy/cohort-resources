# W7D3 - Capybara

![capybaras on grass](https://get.pxhere.com/photo/grass-group-meadow-cute-wildlife-wild-zoo-fur-mammal-eat-rodent-fauna-close-up-outdoors-woods-rodents-animals-vertebrate-capybara-hydrochoerus-hydrochaeris-royalty-free-images-1143560.jpg)

---

## Learning Goals

1. Know what a Capybara is
1. Reinforce testing pyramid and TDD
1. Understand how to test Rails models
1. Understand how to test Rails controllers
1. Become familiar with the Capybara testing library
1. **_Be able to read the specs on Rails 2_**

Note:
* Today, is not just about capybara, but how to test all rails components - models, controllers, views
* This will also help us better understand reading tests that others may write for our apps (like the assessment)

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


Note:
So, why do we actually write tests? (take suggestions from the class)

---

### Why Write Tests?

1. Make sure your code works!
1. Prevent regressions
1. Easier collaboration
1. Built-in documentation

![lazy capybaras](https://c1.staticflickr.com/7/6016/5926723263_4364178ac2_b.jpg)

Note:
* [lazy capybara says] "Why bother writing tests? I can just push code and lie here on the grass."
* A regression is a bug or breakage introduced to functioning software by an update.



---

### The Testing Pyramid

```v
   /  End-to-End Tests \
  /  Integration Tests  \
 /      Unit Tests       \
```


Note:
* UNIT TEST - test one piece: a single class or method, mocking out other objects
  * This is what we did in week 2.
* INTEGRATION TEST - test that components work properly together (e.g. class interaction)
* E2E TEST - test the whole application from web page to DB
	* Capybara is used to write end-to-end tests in Rails.

---

### TDD

1. Red
1. Green
1. Refactor

![capybaras in crosswalk](https://i.imgur.com/KYsKNe6.jpg)

Note:
This flow ensures that:
* The test works.
* The code works.
* You don't write more code or make things more complicated than you need to.
* Not doing TDD in the lecture/demo b/c we're adding tests to an existing project. Once we properly learn how to write tests, then we can follow TDD best practices and write our tests first.

---

## Rails Testing

* What are the components we typically create in Rails?
  * Models, Controllers, and Views (features)


Note:
* Before we dive into how to test these components, let's talk a little bit about how to get things setup and test

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

## Unit Testing: Models

* Small in scope
  * Tests only touch model code
  * Tests can touch the database
* Things to test
  * Validations / error messages
  * Associations
  * Class AND instance methods (not private)

Note:

* Avoid touching the DB if possible - this slows down tests
* If you remember back to the lecture on W3D3 (models and migrations), you'll remember that we told you that models typically contain three things:
  1. Validations
  1. Associations
  1. Methods (both class and instance methods)

---

## Code Demo - Setup and Model Testing


Note:

* Walk through the user model specs of BlueBird (not necessarily all, but enough to get the point across)
* Open up FactoryBot reading and walk through the setup + coding of a basic `user` factory

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

Note:
CHECK THE TIME... TIME FOR A BREAK???

---

## Integration Testing: Controllers

* Scope:
	* controllers, routes, models, database
  * does not test views
* Useful for testing:
	* status codes
  * rendering
  * under various conditions (e.g. Valid and invalid params)

Note:

* In the wild, a controller is instantiated to handle each request-response cycle.
* ensure our controller responds how we expect to a variety of requests
* You should write tests for each action in your controller.
  * We typically do so by checking the status codes and response type
* We want to test several types of conditions (such as when the params are valid AND invalid)

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

Note:

* Here are some of the methods we are going to be using to help us with our controller test (aka integration testing)
* Navigation methods allow us to simulate how a controller would be used in the wild.
* Assertions check that the controller does what we expected.

---

## Navigation Syntax

(http request) :(controller action), (params)

```ruby
get :new
post :create, params: { user: { username: "harry_potter" } }
```

Note:

* Here is an example of how we would write a `get` request and `post` request with RSpec in order to see what the response would be from our controller
* Checking for the assertion is relatively straightforward, we will look at the syntax for that in the code demo next

---

## Code Demo - Controller Testing

![mokey riding capybara](https://img.cutenesscdn.com/640/ppds/f12c07ba-e3f4-46ca-a97b-dc12539f731e.jpg)

Note:

* Walk through the code for the user controller specs, pointing out how formulaic everything is according to the navigation syntax

Note:
CHECK THE TIME... TIME FOR A BREAK???

---

## End-to-End Testing: Features

* Simulates how a real user would interact with app
* Test in a "headless" browser (no actual UI)
* Capybara can open a real browser for debugging (`save_and_open_page`)

![capybara with aligator](https://img.cutenesscdn.com/640/ppds/cb92be4c-f43e-4294-9895-146b711863b0.jpg)

Note:

* One of the most difficult parts of the assessment is the features (or views) section
* That's because the tests can be difficult to read if you haven't seen Capybara before and because end-to-end testing can be pretty difficult
* Thus, this part of the lecture is incredibly important

---

## Capybara Under the Hood

![ruby testing ecosystem](http://altoros.github.io/images/posts/2014-07-29-ruby-integration-testing-tools-population-census/2010.png)

Note: You don't need to know what any of these technologies are, just be aware that Capybara uses other tools to automate your entire Rails app.

---

## Capybara API

* Navigation
  * `visit`
  * `click_on`
* Forms
  * `fill_in "field", with: "value"`
  * `choose`, `check`, `uncheck`
  * `select "option", from: "select box"`

Note:
* Here are some of the commands we are going to be using to help us with our feature tests (aka end-to-end testing)
* First, we have the ability to simulate certain requests (labeled under navigation because they are simulating navigating to a certain controller and action)
* We also have the ability to interact with forms and populate them with information
* Note that these methods all simulate user interaction
* In controller tests, we were simulating application events, not user interaction

---

## Capybara API

* Assertions
  * `have_content`
  * `current_path`
  * `page`
* Debugging
  * `save_and_open_page`
* [And much more!](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/RSpecMatchers)


Note:

* Additionally, we have our assertions similar to our controller testing, which are basically just conditions that lets us check to see what the status of our page is
* Explain the difference between current_path and page
  - `current_path` is the `path(url)` you are on
  - `page` is what is actually displayed on the page

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

# Thank you
