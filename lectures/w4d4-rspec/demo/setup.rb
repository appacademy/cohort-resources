#Setup steps

#bundle init
#this command creates a Gemfile

#add gems to Gemfile
# gem "pry"
# gem "byebug"
# gem "rspec"

#bundle install
#this command creates Gemfile.lock after installing gems / gem dependencies

#rspec --init
#this command creates .rspec file and spec folder which contains spec_helper.rb

#add to .rspec file to set formatting to what we are used to seeing for spec output in terminal
# --format documentation
# --color

#manually create lib folder in root to go with the spec folder that was already created

#create file in lib/ with name matching to a file in spec/
# for example lib/piece.rb and spec.piece_spec.rb

# to follow red-green-refactor workflow we will write tests in spec before writing code in lib

# make sure to add in spec file:
# require 'rspec'
# require 'name_of_corresponding_file_in_lib'