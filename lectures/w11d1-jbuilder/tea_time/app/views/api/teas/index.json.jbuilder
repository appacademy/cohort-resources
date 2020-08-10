@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.amount tea.amount
        json.partial! 'tea', tea: tea
    end
end