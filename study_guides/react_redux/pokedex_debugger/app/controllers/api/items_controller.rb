class Api::ItemsController < ApplicationController
  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      pokemon = @item.pokemon
      
      render json: pokemon, include: [:items]
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  private

  def item_params
    params.require(:item).permit(:happiness, :name, :pokemon_id, :price)
  end
end
