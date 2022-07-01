json.tea do
  json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids
end

json.transactions do
  transactions = @tea.transactions.includes(:user) # avoid N+1 query, includes is active record not #include?
  transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :quantity, :created_at
      json.customer transaction.user.username
    end
  end
end
