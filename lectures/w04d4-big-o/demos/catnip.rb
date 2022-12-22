require 'faker'

class Cat
    attr_reader :name

    def initialize(name)
        @name = name
    end

    # builds a profile on a cat
    def assess
        sleep(0.1)
    end

    # determines viability of other_cat as a pawtner.
    def compare(other_cat)
        sleep(0.01)
    end
end

def assess_cats(cats)
    sleep(1)
    cats.each { |cat| cat.assess }
end

def compare_cats(cats)
    sleep(1)
    cats.each do |cat_1|
        cats.each do |cat_2|
        next if cat_1 == cat_2
        cat_1.compare(cat_2)
        end
    end
end

def cat_compatibility_algorithm(all_cats)
    puts "Assessing cats..."
    assessment_time = measure_runtime { assess_cats(all_cats) }
    puts "Catssessments completed in #{assessment_time}s"
    
    puts '----'

    puts "Comparing cats..."
    comparison_time = measure_runtime { compare_cats(all_cats) }
    puts "Cat comparisons completed in #{comparison_time}s"
end

def measure_runtime(&prc)
    before_time = Time.now
    prc.call
    Time.now - before_time
end


#------------------------------------------------------------------------------#


puts <<~'HEREDOC'
  /$$$$$$  /$$        /$$$$$$              /$$               /$$
 /$$__  $$| $$       /$$__  $$            | $$              |__/
| $$  \ $$| $$   /$$| $$  \__/  /$$$$$$  /$$$$$$   /$$$$$$$  /$$  /$$$$$$
| $$  | $$| $$  /$$/| $$       |____  $$|_  $$_/  | $$__  $$| $$ /$$__  $$
| $$  | $$| $$$$$$/ | $$        /$$$$$$$  | $$    | $$  \ $$| $$| $$  \ $$
| $$  | $$| $$_  $$ | $$    $$ /$$__  $$  | $$ /$$| $$  | $$| $$| $$  | $$
|  $$$$$$/| $$ \  $$|  $$$$$$/|  $$$$$$$  |  $$$$/| $$  | $$| $$| $$$$$$$/
\______/ |__/  \__/ \______/  \_______/   \___/  |__/  |__/|__/| $$____/
                                                               | $$
                                                               | $$
                                                               |__/
    HEREDOC


num_cats = 90
cats = num_cats.times.map { Cat.new(Faker::Creature::Cat.name) }

print "Today's candidates are: "
puts cats.map(&:name).join(", ")
print "\n"

cat_compatibility_algorithm(cats)