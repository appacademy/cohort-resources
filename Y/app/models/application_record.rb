class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # essentially a middle man between all our models and activerecord

  # if you wanted all models to have some method, can write it here
end
