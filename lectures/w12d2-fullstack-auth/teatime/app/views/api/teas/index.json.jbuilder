@teas.each do |tea|
    json.set! tea.id do 
        #partial syntax
        json.partial! 'tea', tea: tea
        
        #extract syntax
        # json.extract! tea, :id, :flavor, :price

        # make our own keys
        # json.id tea.id
        # json.flavor tea.flavor
        # json.price tea.price
        # json.firstName tea.firstNname
    end
end