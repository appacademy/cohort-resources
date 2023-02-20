debugger

@teas.each do |tea|
    # json.set! tea.id do
    #     json.id tea.id
    #     json.flavor tea.flavor
    #     json.price tea.price
    # end

    # json.set! tea.id do
    #     json.extract! tea, :id, :flavor, :price 
    # end

    json.set! tea.id do
        json.partial! 'tea', tea: tea
    end
end