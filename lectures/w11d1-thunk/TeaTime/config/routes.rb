Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # add /api to request path to route to teas
  namespace :api, defaults: {format: :json} do
    resources :teas, only: [:index, :create]
  end

  root to: 'static_pages#root' # if the request is get '/' route to here
  
end
