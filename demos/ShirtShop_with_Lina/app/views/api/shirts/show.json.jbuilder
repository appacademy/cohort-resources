# json.shirt do 
#     json.extract! @shirt, :id, :price, :color, :style
#     json.image_url asset_path(@shirt.image_url)
# end

json.reviews do 
    @shirt.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :description, :shirt_id 
            json.reviewer review.user.name
        end
    end
end