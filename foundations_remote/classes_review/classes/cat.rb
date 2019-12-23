require_relative "./dog.rb"
require "byebug"
class Cat 
    @@default_cat_name = "Jimmy"
    LIVES = 9
    attr_accessor :name, :breed, :age

    def initialize(name, breed, age)
        @name = name 
        @breed = breed 
        @age = age
        s = "s"
    end

    # def name 
    #     @name 
    # end
    
    # def breed
    #     @breed
    # end

    # def age 
    #     @age 
    # end

    # def age=(val)
    #     @age = val 
    # end

    def test_attr
        #showing difference between self.age and @age why we choose one over the other
        #show that we dont need the manually defined methods anymore because I've
        #put in the attr accessor at the top






        name = "me"
        debugger 
        s = "s"
    end

    def default_cat_name
        @@default_cat_name
    end

    def change_default_cat_name
        @@default_cat_name = "carlos"
    end

    def change_default_cat_name2
        @@default_cat_name = "sandra"
    end

    def self.LIVES
        LIVES
    end
end

# harold = Cat.new("harold", "orange tabby", 2)
# lyla = Cat.new("lyla", "calico", 10)

# harold.test_attr
# Cat.LIVES






