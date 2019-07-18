# Write a method char_counter that accepts a string as the first argument and any 
# number of additional arguments of single characters. The method should return a 
# hash containing the counts of the additional character arguments in the first 
# string argument. When only the first string argument is given, it should return 
# a hash containing the counts of all characters in the string.



# Examples

p char_counter('mississippi', 'm', 'i')           # => {'m'=>1, 'i'=>4}
p char_counter('mississippi', 'm', 'i', 'p')      # => {'m'=>1, 'i'=>4, 'p'=>2}
p char_counter('christine', 'c')                  # => {"c"=>1}
p char_counter('christine', 'i', 't', 'x')        # => {"i"=>2, "t"=>1, "x"=>0}
p char_counter('christine')                       # => {"c"=>1, "h"=>1, "r"=>1, "i"=>2, "s"=>1, "t"=>1, "n"=>1, "e"=>1 }