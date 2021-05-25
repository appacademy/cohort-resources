@teas.each do |tea|
    json.set! tea.id do 
        # key         value
        # json.dummy 'dummy info'
        # json.id     tea.id
        # json.flavor tea.flavor
        # json.amount tea.amount
        # json.extract! tea, :id, :flavor, :amount
        # partial
        #             partial file path    tea partial    tea we are working with
        json.partial! 'tea',               tea:           tea
    end
end