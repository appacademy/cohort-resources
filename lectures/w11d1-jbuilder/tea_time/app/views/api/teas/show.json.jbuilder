json.tea do
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids # => array of transaction ids through has_many association
end

json.transactions do
    @tea.transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :id, :quantity, :created_at, :tea_id # => belongs_to association
            json.customer transaction.user.username
        end
    end
end