Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/chirps', to: 'chirps#index'
  # get '/chirps/:id', to: 'chirps#show'
  # post '/chirps', to: 'chirps#create'
  # patch '/chrips/:id', to: 'chirps#update'
  # delete '/chirps/:id', to: 'chirps#destroy'

  # get '/chrips/search', to: 'chirps#search'

  resources :chirps, only:[:index, :show, :create, :update, :destroy]

  #nested routes
  # resources :users do
  #   resources :chirps, only: [:update, :create]
  # end

  # resources :chirps, only: [:index, :show]


end
