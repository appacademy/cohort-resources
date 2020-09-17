#### ARRAY DEFAULTS ####

## Naive Approach
grid = Array.new(3, [])
grid[0] << 'X'
grid # All sub-arrays have been modified

## Correct Approach
grid = Array.new(3) { [] }
grid[0] << 'X'
grid



#### HASH W/ ARRAY DEFAULT ####

## Naive Approach 1
h = Hash.new([])

h[:greetings] << 'hello'
h[:greetings] # ['hello']

h[:farewells] # ['hello']
h # {}


## Naive Approach 2
h = Hash.new { [] }

h[:greetings] << 'hello'
h[:greetings] # []

h[:farewells] # []
h # {}


## Correct Approach
h = Hash.new { |hash, key| hash[key] = [] }

h[:greetings] << 'hello'
h[:greetings] # ['hello']

h[:farewells] # []
h # { greetings: ['hello'], farewells: [] }

# Short-hand version you'll often see done
h = Hash.new { |h, k| h[k] = [] }



#### COUNTER HASH ####

## Works, but unnecessary
h = Hash.new { |hash, key| hash[key] = 0 }

# Best way to do a counter hash
points = Hash.new(0)

points[:knowing_bat] += 1
points[:knowing_bat] # 1
points[:captain_camel] # 0

points # { knowing_bat: 1 }