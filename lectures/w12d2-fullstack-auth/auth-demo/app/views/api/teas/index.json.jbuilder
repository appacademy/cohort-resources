

@teas.each do |tea|
  json.set! tea.id do
    # json.id tea.id
    # json.flavor tea.flavor
    # json.price tea.price

    # json.extract! tea, :id, :flavor, :price

    json.partial! 'tea', tea: tea
    #first tea is name of partial
    #second is name of variable that we will have access to in partial
    #third is local variable we are passing along
  end

end