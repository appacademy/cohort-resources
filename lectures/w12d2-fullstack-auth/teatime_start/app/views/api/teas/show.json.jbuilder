json.tea do
  json.extract! @tea, :id, :flavor, :price, :description
  # utilizing a built-in rails helper method to grab associated transaction ids
  json.transactionIds @tea.transaction_ids 
end

# need "eager loading" to query for the user from each transaction beforehand
# if we, instead, just iterated over tea.transactions, we would have an N+1 query
transactions = @tea.transactions.includes(:user)

json.transactions do
  transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :quantity, :created_at
      json.customer transaction.user.username
    end
  end
end

# intended state shape:
#
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