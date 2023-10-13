json.tea do
    json.extract! @tea, :price, :description, :id, :flavor
end

# transactions = @tea.transactions.includes(:user)

# json.transactions do
#     transactions.each do |transaction|
#         json.set! transaction.id do
#             json.extract! transaction, :user_id, :tea_id, :quantity
#             json.username transaction.user.username
#         end
#     end
# end
