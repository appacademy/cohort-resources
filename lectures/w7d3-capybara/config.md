
- Add gems to Gemfile - 

  ```Ruby
    group :development, :test do
      gem 'rspec-rails' 
      gem 'factory_bot_rails' 
      gem 'rails-controller-testing' 
    end

    group :test do
      gem 'capybara' 
      gem 'faker' 
      gem 'launchy' 
      gem 'shoulda-matchers' 

      # gem 'chromedriver-helper'
      gem 'webdrivers'
    end
  ```

- `bundle install`

- `bundle exec rails g rspec:install`. Generates:`.rspec`, `spec/`, `spec_helper.rb`, `rails_helper.rb`

- Add to` .rspec`:

```bash
--color
--require spec_helper
--format documentation
```


- Add to `config/application.rb`:

    ```Ruby
    config.generators do |g|
        g.test_framework :rspec, 
        :fixtures => false, 
        :view_specs => false, 
        :helper_specs => false,
        :routing_specs => false,
        :controller_specs => true,
        :request_specs => false
        g.fixture_replacement :factory_bot, :dir => "spec/factories"
    end
    ```


- Add config to `spec/rails_helper.rb`:

    ```Ruby
    Shoulda::Matchers.configure do |config|
        config.integrate do |with|
            # Choose a test framework:
            with.test_framework :rspec
            # Choose one or more libraries:
            # with.library :active_record
            # with.library :active_model
            # with.library :action_controller
            # Or, choose the following (which implies all of the above):
            with.library :rails
        end
    end
    ```

- Configuration Steps:
    1. Add testing gems
    2. Run `bundle install`
    3. Set up test database, if necessary by running `rails db:test:load`
    4. Run `bundle exec rails g rspec:install`
    5. Add configs to `.rspec`
    6. Edit `config/application.rb` to use rspec
    7. Edit `spec/rails_helper.rb` for shoulda-matchers