teas = @teas.includes(:likes)
# debugger
teas.each do |tea|
    json.set! tea.id do
        json.extract! tea, :flavor, :price, :id
        json.num_likes tea.likes.length
    end
end

# json.likes do
#     dsdsas
# end