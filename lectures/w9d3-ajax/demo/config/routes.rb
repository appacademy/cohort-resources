Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :gifs, only: [:create]
  get '/gifs/:title', to: 'gifs#show'
  root "static_pages#root"
end
