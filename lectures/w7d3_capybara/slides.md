# W7D3 - Capybara

![capybaras on grass](https://get.pxhere.com/photo/grass-group-meadow-cute-wildlife-wild-zoo-fur-mammal-eat-rodent-fauna-close-up-outdoors-woods-rodents-animals-vertebrate-capybara-hydrochoerus-hydrochaeris-royalty-free-images-1143560.jpg)

Note: 

Good morning and welcome to today's lecture ! This lecture is supposed to be lighter than the ones we gave you in the past few days.
It is supposed to reinforce your knowledge as to why we need testing on the firsthand and to give you a recap of RSpec testing. Then, we will learn what Capybara tests are and what they are used for. 

Let's get started !

---

## Learning Goals

1. Know what a Capybara is
1. Reinforce testing pyramid and TDD
1. Understand how to test Rails models
1. Understand how to test Rails controllers
1. Become familiar with the Capybara testing library
1. **_Be able to read the specs on Rails 2_**

Note:
* By the end of this lecture, you should be able to explain what a capybara is, and that is really important.
* We are then going to reinforce our knowledge about the testing pyramid and the need for Test Driven Development
* We are going to review how to test models, but with the introduction of a new gem that is going to make things faster and easier. Remember that we already learnt how to test models during our RSpec lecture, and you must definitely be familiar with it after all the assessments and projects you worked on that used RSpec tests
* After we test our models, we are going to become more familiar with writing tests for our controllers. That is going to be in RSpec too.
* Finally, we are going to write tests for our views using Capybara ! 
* You might have noticed that today, is not just about capybara, but how to test all rails components - models, controllers, views.
* Writing tests for all of these moving parts is going to help us better understand how things flow when you decide to introduce tests for your app. They will also allow us to understand specs that were written for us, such as in the assessment.
* Understanding specs is going to be very helpful for us during the assessment. 
**When I was a student, I had a friend who spent a considerable time trying to understand specs during her assessment prep and that played really well for her during the test**.

---

## What is a Capybara?

![capybara with birds and turtles](https://img.cutenesscdn.com/640/ppds/dc0727e1-48ee-499f-acb8-17b1629917f4.jpg)

Note:
* What is a Capybara, then? 
* A Capybara is a gentle, adorable, water-loving South American mammal 
* It is the world's largest rodent and weight up to 200 pounds
* Capybaras are VERY social creatures. You might OWN them as a pet if you were not living in California. (Illegal to own them here).
* There is a `:capybara` emoji on Slack and I expect you to use it today.

---

## Ugly cousin of the Wombat

![cute wombat](https://cdn.hipwallpaper.com/m/2/91/I2vCxP.jpg)

Note:

A Capybara is an ugly cousin of the Wombat, a rodent that is native of Australia.

---

## Testing Review

![mommy capybara with babies](https://www.zooborns.com/.a/6a010535647bf3970b0133ece6466d970b-800wi)


Note:
Let's dive into reviewing material we learnt during RSpec.
So, why do we actually write tests? (take suggestions from the class)

---

### Why Write Tests?

1. Make sure your code works!
1. Prevent regressions
1. Easier collaboration
1. Built-in documentation

![lazy capybaras](https://c1.staticflickr.com/7/6016/5926723263_4364178ac2_b.jpg)

Note:
* [lazy capybara says] "Why bother writing tests? I can just push code and lie here on the grass.", and we say "NO"
* First, we want to make sure our code works. We can definitely keep testing manually but as our app grows, it is not reasonable to keep clicking links and navigating our website to make sure that we did not break anything and that what we just built is working.
* Second, building a new feature might mean that you will need to modify code that already existed and might also mean that you need to make sure that you did not break any previous code. So testing your code will help you prevent regressions (bugs or breakages introduced to functioning software after an update)
* Testing will also make it easier for us to collaborate with other software engineers. We no longer have to try and read what others were trying to do by reading the content of their method. In fact, just by looking at the tests they wrote, we can have a general overview of what each method they wrote is doing. Also, touching on our previous point, writing tests will prevent us from breaking our collaborators code when we are writing our own code. In fact, just by running our specs, we will easily know if we broke anything or not.
* Because our code will take much more time being read by other software engineers than the time it took us to write, having tests for what you built is going to create documentation for others to go back to if needed.





---

### The Testing Pyramid

```v
   /  End-to-End Tests \
  /  Integration Tests  \
 /      Unit Tests       \
```

![capybara pyramid](https://user-images.githubusercontent.com/51456702/103490107-5b949d00-4dce-11eb-870e-eeeb0a23d617.jpg)

Note:
* The testing pyramid is an approach to structure your test suite
* UNIT TEST - test one piece: a single class or method, mocking out other objects
  * This is what we did in week 2.
  * Out of all the tests we write for our apps, unit tests are the most common because they test how each part of our app is working individually
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

![capybara with monkeys on back](https://user-images.githubusercontent.com/51456702/103490220-2b99c980-4dcf-11eb-8f1e-18b1f7cc5cef.jpg)

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
* `spec_helper.rb` - helper methods
* `rails_helper.rb` - config
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

## Code Demo - Model Testing

![capybara with stuffed capybara](https://user-images.githubusercontent.com/51456702/103491160-3c9a0900-4dd6-11eb-809d-2da742f65fd6.jpg)

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
  * Valid and invalid params

Note:

* When we write tests for our controller, we really are testing not only our controller behavior, but also our routes, models, and DB. That is because when we write logic in our controller, we cannot instantiate a controller if we do not have a route for it (that is why we are testing for routes in the background), and we cannot test only the request, as in a controller, we might render, redirect, pull data from the DB, etc/
* 

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
