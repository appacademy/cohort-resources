# json.extract! @tea, :id, :flavor, :amount
json.partial! 'tea', tea: @tea

# 'tea' look for file with name tea
# tea: set tea variable within partial
# @tea: set tea variable to point to @tea