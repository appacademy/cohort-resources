# this is ruby code

@teas.each do |tea|
  json.set! tea.id do
    json.partial! 'tea', tea: tea
    # json.extract! tea, :id, :flavor, :price
    # json.id tea.id
    # json.flavor tea.flavor
    # json.price tea.price
    # json.otherThing "whatever"
  end
end

# {
#   1: {id: 1, flavor: "green", price: 3.0}
#   3: {id: 3, flavor: "black", price: 3.0}
# }