@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.amount tea.amount
        json.partial! 'tea', tea: tea
    end
end

# {
#     id: {
#         id: 1,
#         flavor: 'Green',
#         amount: 1.5
#     }
# }