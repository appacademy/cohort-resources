# @tea == {id: 1, flavor: "par", amount: 99, otherstuff}

# json.extract! @tea, :id, :flavor, :amount

json.partial! 'tea', tea: @tea

# {id: 1, flavor: "par", amount: 99}