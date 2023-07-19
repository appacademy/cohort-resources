Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :gifs, only: :create
    get '/gifs/:title', to: 'gifs#show'
  end
  
  root to: 'static_pages#root'
end
