# Rails Assessment 2 Practice Overview

You will have **2 hours** to complete this assessment. This assessment consists
of 2 components:

1. [HackerRank](http://hr.gs/c5ea833c-02b4-4828-81d8-48de3f8629d8)(password:
   `practiceRails`)
2. Goal Application with User Authentication

## Scoring and time estimates

| Component             | Maximum Points | Estimated Time (minutes) |
| --------------------- | -------------- | ------------------------ |
| HackerRank            | 48             | 30 min                   |
| User Goal Application | 68             | 1 hour and 30 min        |

The maximum number of points for this entire assessment is **116**. Your final
score will be calculated as the percentage of points awarded over the maximum
number of points:

`score = (total_points_awarded / 116) * 100`

The passing score for this assessment is **75**.

## Overall File Structure

You will start with a standard Rails file structure that includes specs. **Do
not alter any of the spec files.**

## Scoring & Objective for Goal Application

Each passing spec will award one point, for a total of 68 points. This component
of the assessment is estimated to take **1 hour and 30 minutes**. Your objective
is to pass as many specs as possible.

## Getting Started

Before you begin running the specs, make sure that you create your database:

```sh
bundle exec rails db:create
```

## Database Config

Every time you run `bundle exec rails db:migrate`, also run
`bundle exec rails db:test:load`. `db:migrate` only updates the development
database; `db:test:load` updates the test DB schema to mirror the development
DB.

You can combine both commands into one:

```sh
bundle exec rails db:migrate db:test:load
```

### Resources

You will create migration, models, routes, controllers and views for the
following data types:

1. `Users` will have a `username` which is a string, a `session_token` which is
   a string, and a `password_digest` which is a string.
2. `Goals` will have a `name` which is a string, `details` which will be a
   string, a `status` which will be either `true` or `false` (use `t.boolean` in
   the migration), and will belong to a `User`.

A User has many Goals, and a Goal belongs to a user. Any User can create a new
goal for another User but only a goal's owner can delete their own goals.

Logged in Users will be able to view a list of Users and create new Goals - if
the user is not logged in they will be taken to the Sign In page.

#### User Authentication Tips

- **Use BCrypt**. You must not store passwords in the DB.
- `BCrypt::Password.create(password)` digests a password and builds a `Password`
  object.
- `BCrypt::Password.new(digest)` builds a `Password` object for the digest.
- `BCrypt::Password#is_password?(password)` checks if a password matches a
  digest.

## Specs

As you progress though this Assessment we recommend completing and running all
the **Models** specs, the **Controller** specs, the **View** Specs, and then the
**Features** Specs.

If a failing spec confuses you, look at the spec file to see if you can discern
what it is asking of you. You may also wish to add `debuggers` for RSpec files
or `save_and_open_page` for Capybara specs to see what Capybara sees.

Note that a common mistake relates to capitalization; Capybara needs to have the
text of links and buttons exactly match what it expects.

As ever, please ask your TAs any questions. If you get stuck or don't know why
something is failing; ask. TAs will let you know whether they can answer your
question, so ask anything. Don't use internet or prior notes.

### Running Specs

- `bundle install` to install dependencies
- `bundle exec rspec` to run the entire spec suite
- `bundle exec rspec spec/<spec_file_name>` to run all specs in a given spec
  file

  - for example: `bundle exec rspec spec/models/user_spec.rb`

- The tests are intended to be run in this order:
  `bundle exec rspec spec/models/user_spec.rb`
  `bundle exec rspec spec/models/goal_spec.rb`
  `bundle exec rspec spec/controllers/application_controller_spec.rb`
  `bundle exec rspec spec/controllers/users_controller_spec.rb`
  `bundle exec rspec spec/controllers/sessions_controller_spec.rb`
  `bundle exec rspec spec/controllers/goals_controller_spec.rb`
  `bundle exec rspec spec/views/users/index.html.erb_spec.rb`
  `bundle exec rspec spec/features/auth_spec.rb`
  `bundle exec rspec spec/features/goals_spec.rb`

- `bundle exec rspec spec/<spec_file_name>:<line_number>` to run the spec(s) in
  the block that contains the given line number of a given spec file
  - for example: `bundle exec rspec spec/models/user_spec.rb:1`

## Submission

- Rename the directory `"#{first_name}_#{last_name}"`.
- **Remove the `tmp` and `vendor`** folders to ensure your file won't be too
  big.
- ZIP it (you can use OS X's built in zip functionality)
- Make sure you submit a `.zip`; no boutique formats please :-)

Good luck!

**Copyright App Academy, please do not post online.**
