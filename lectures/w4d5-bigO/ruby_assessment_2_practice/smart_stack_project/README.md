# Ruby Assessment 2 Practice - SmartStack Project

In this project, you will build a `SmartStack`, a variation of a classic `Stack` data structure.

## File Structure

```plaintext
/smart_stack_project
├── Gemfile
├── README.md (<- you are here)
├── lib
│   ├── smart_stack.rb
│   └── stack.rb
└── spec
    ├── smart_stack_spec.rb
    └── stack_spec.rb
```

## Scoring

Each passing spec will award one point, for a total of 37 points.
This component of the assessment is estimated to take 35 minutes.

## Objective

There are 37 total specs given in the `spec` directory. Your objective is to
pass as many specs as possible. We recommend that you work through the spec
files in the following order:

1. `spec/stack_spec.rb` (16 specs)
2. `spec/smart_stack_spec.rb` (21 specs)

## Usage

- `cd` into the project's root directory (`smart_stack_project`)
- `bundle install` to install dependencies
- `bundle exec rspec` to run the entire spec suite
- `bundle exec rspec spec/<spec_file_name>` to run all specs in a given spec
  file
  - for example: `bundle exec rspec spec/smart_stack_spec.rb`
- `bundle exec rspec spec/<spec_file_name>:<line_number>` to run the spec(s) in
  the block that contains the given line number of a given spec file
  - for example: `bundle exec rspec spec/smart_stack_spec.rb:117`

## API

Below is the complete list of methods that the classes will support. Note that
some methods may be overridden in the subclass.

### Stack

- #initialize
- #size
- #empty?
- #top
- #peek
- #push
- #pop

### SmartStack (inherits from Stack)

- #max_size
- #full?
