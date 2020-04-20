@teas.each do |tea|
    json.set! tea.id do #dynamically set the key to the tea's id
        # json.id tea.id #statically set a key of 'id', value is the tea.id
        # json.flavor tea.flavor
        # json.price tea.amount
        # json.extract! tea, :id, :flavor, :amount
        json.partial! 'tea', tea: tea
        # json.extract! tea, *tea.attributes.keys 
    end
end

# {
#    tea.id: {
        # id: 1,
        # flavor: 'green'
#     }
# }