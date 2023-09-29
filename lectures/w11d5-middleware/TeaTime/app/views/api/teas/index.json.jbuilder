@teas.each do |tea|
    json.set! tea.id do
        json.extract! tea, :flavor, :price, :id
        # json.flavor tea.flavor
        # json.price tea.price
        json.num_likes tea.likes.length
    end
end