### Removing the `ActiveStorage` Routes

In Rails 5.2, there are a set of `active_storage` default routes.
To remove these, change your `config/application.rb`. Only way I
could find to do this right now is to not require `all` and
manually require everything else :(

```rb
# require 'rails/all'

require "rails"

# Include each railties manually, excluding `active_storage/engine`
%w(
  active_record/railtie
  action_controller/railtie
  action_view/railtie
  action_mailer/railtie
  active_job/railtie
  action_cable/engine
  rails/test_unit/railtie
  sprockets/railtie
).each do |railtie|
  begin
    require railtie
  rescue LoadError
  end
end
```

Then, in your `development.rb`, comment out the following line:

```rb
config.active_storage.service = :local
```

If you are pushing to production and testing, be sure to do this for
`production.rb` and `test.rb` as well.

Finally, remove the following line from `application.js`:

```js
//= require activestorage
```
