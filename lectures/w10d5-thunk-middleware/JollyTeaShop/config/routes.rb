Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  ## 'GET' request to localhost:3000
  root to: 'static_pages#root'

 #/api/
  namespace :api, defaults: {format: :json} do 
    resources :teas, only: [:index, :create]
  end

end
