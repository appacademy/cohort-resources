Rails.application.routes.draw do
  # get 'users/index'
  # get 'users/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # verb '/path/, to: 'controller#action'

  # get '/chirps', to: 'chirps#index'
  # get '/chirps/:id', to: 'chirps#show'
  # post '/chirps', to: 'chirps#create'
  # patch '/chirps/:id', to: 'chirps#update'
  # delete '/chirps/:id', to: 'chirps#destroy'
  # put '/chirps/:id', to: 'chirps#update'

  # patch update -> just have the chirp id and updated body
  # put update -> need the whole chirp to update, including things like author_id etc

  resources :chirps, except: [:new, :edit]
  resources :users
  resource :session, only: [:new, :create, :destroy]
  
end
