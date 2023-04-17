@teas.each do |tea|
  json.set! tea.id do
    # json.id tea.id
    # json.price tea.price
    # json.flavor tea.flavor
    # json.extract! tea, :id, :price, :flavor
    json.partial! 'tea', tea: tea
  end
end