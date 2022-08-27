@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.price tea.price
        # json.extract! tea, :id, :flavor, :price
        json.partial! 'tea', tea: tea
    end
end