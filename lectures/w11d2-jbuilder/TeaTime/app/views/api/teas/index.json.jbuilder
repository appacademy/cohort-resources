@teas.each do |tea|
  json.set! tea.id do
    # json.id tea.id
    # json.flavor tea.flavor
    # json.amount tea.amount
    # json.extract! tea, :id, :flavor, :amount
    json.partial! 'tea', tea: tea
  end
end

# { 
#   1: { id: 1, flavor: 'Green', amount: 5 },
#   2: { id: 2, flavor: 'Oolong', amount: 10 },
# }