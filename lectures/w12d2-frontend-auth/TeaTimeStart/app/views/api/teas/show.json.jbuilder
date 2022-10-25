json.tea do
  json.extract! @tea, :id, :flavor, :price, :description
  # utilizing a built-in rails helper method to grab associated transaction ids
  json.transactionIds @tea.transaction_ids 
end

json.transactions do
  @tea.transactions.each do |transaction|
    json.set! transaction.id do
      json.id transaction.id
      json.quantity transaction.quantity
      json.username transaction.user.username
    end
  end
end

# {
#   tea: {
#     id: 1,
#     flavor: "green",
#     price: 3.0,
#     description: "its good",
#     transactionIds: [2,3,6,7]
#   },
#   transactions: {
#     2: {
#       id: 1,
#       quantity: 4,
#       username: "mike"
#     },
#     3: {
#       ...
#     },
#     6: {
#       ...
#     },
#     7: {
#       ...
#     }
#   }
# }