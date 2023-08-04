# json.key_name do
#     json.inner_key "hello"
# end


@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.prices tea.price
        # json.extract! tea, :id, :flavor, :price
        json.partial! 'tea', tea: tea
    end
end