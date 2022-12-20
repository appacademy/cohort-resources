json.tea do
  json.extract! @tea, :id, :flavor, :price, :description, :transaction_ids
end

# json.tea do
#   json.set! @tea.id do
#     json.extract! @tea, :id, :flavor, :price, :description, :transaction_ids
#   end
# end


json.transactions do
  @tea.transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :quantity, :created_at, :tea_id
      json.customer transaction.user.username
    end
  end
end
