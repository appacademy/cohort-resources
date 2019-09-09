# Rspec Documentation
* [rspec core](https://github.com/rspec/rspec-core)

* [rspec matchers](https://github.com/rspec/rspec-expectations)

# Setup
* In terminal, run bundle init to create a Gemfile.
* Add rspec, pry and byebug gems and run bundle install.
* Run rspec --init. This creates a .rspec file and the spec folder with a spec_helper.rb file inside.
* Create the lib directory where all your files will live. example: lib/sloth.rb
* Create the spec directory where all your spec files will live. example: spec/sloth_spec.rb.

* example spec file: 

```
require 'sloth'

RSpec.describe ClassName do
    describe "#method_name" do
        it "test_name" do
        end
    end
end
```
