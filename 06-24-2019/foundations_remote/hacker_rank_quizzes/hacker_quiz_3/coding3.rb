# write a method, highest_score, that accepts an array
# containing student hashes as an argument
# The method should return the initials of the student with the highest average score.

def highest_score(students)
    
    
end

students_1 = [
    {"name"=>"Alvin Zablan", "scores"=>[-42, 20, 50]},
    {"name"=>"Eliot Bradshaw", "scores"=>[57, 100, 80]},
    {"name"=>"Tommy Duek", "scores"=>[90, 100]},
    {"name"=>"Fred Sladkey", "scores"=>[94, 92]}
]
p highest_score(students_1)     # => "TD"

students_2 = [
    {"name"=>"Rose Koron", "scores"=>[97, 90]},
    {"name"=>"Jeff Fiddler", "scores"=>[100, 90, 80]},
    {"name"=>"Dave Fort", "scores"=>[85, 96]},
    {"name"=>"Mary La Grange", "scores"=>[100]},
    {"name"=>"Candace Hsu", "scores"=>[89, 94]}
]
p highest_score(students_2)     # => "MLG"

    # Examples

students_1 = [
    {"name"=>"Alvin Zablan", "scores"=>[-42, 20, 50]},
    {"name"=>"Eliot Bradshaw", "scores"=>[57, 100, 80]},
    {"name"=>"Tommy Duek", "scores"=>[90, 100]},
    {"name"=>"Fred Sladkey", "scores"=>[94, 92]}
]
p highest_score(students_1)     # => "TD"

students_2 = [
    {"name"=>"Rose Koron", "scores"=>[97, 90]},
    {"name"=>"Jeff Fiddler", "scores"=>[100, 90, 80]},
    {"name"=>"Dave Fort", "scores"=>[85, 96]},
    {"name"=>"Mary La Grange", "scores"=>[100]},
    {"name"=>"Candace Hsu", "scores"=>[89, 94]}
]
p highest_score(students_2)     # => "MLG"