Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do 
    # no views for these: 
    resources :teas, only: [:index, :create]
  end

  # custom route, could be called banana
  root to: "static_pages#root"

end
