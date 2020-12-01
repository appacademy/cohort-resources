json.tea do 
  json.extract! @tea, :id, :amount, :flavor, :description
end

json.transactions do 
  @tea.transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :quantity, :created_at
      json.customer transaction.user.username
    end
  end
end