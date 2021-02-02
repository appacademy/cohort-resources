@teas.each do |tea|
    json.set! tea.id do #set! is a jbuilder method 
        # json.id tea.id #json.my_key my_value
        # json.banana tea.flavor 
        # json.amount tea.amount
        # json.extract! tea, :id, :flavor, :amount #shorthand for above
        json.partial! "tea", tea: tea
            # use the partial named "tea" and give it the argument tea
    end
end

# {
    # "1": {
        # "id": 1,
        # "banana": "Green",
        # "amount": 1.75
    # },
    # "2": {
        # "id": 2,
        # "banana": "Oolong",
        # "amount": 2
    # },
    # "3": {
        # "id": 3,
        # "banana": "Earl Grey",
        # "amount": 2.5
    # },
    # "4": {
        # "id": 4,
        # "banana": "Rooibos",
        # "amount": 3
    # }
# }