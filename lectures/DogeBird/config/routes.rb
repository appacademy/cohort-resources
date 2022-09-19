Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # get '/chirps', to: 'chirps#index'
  # post '/chirps', to: 'chirps#create'
  # get '/chirps/:id', to: 'chirps#show'
  # patch '/chirps/:id', to: 'chirps#update'
  # delete '/chirps/:id', to: 'chirps#destroy'

  # this is equivalent to the above
  resources :chirps, only: [:index, :create, :show, :update, :destroy]
  resources :users, only: [:show, :index, :new, :create, :edit, :update, :destroy]
  resource :session, only: [:new, :create, :destroy]

  # Defines the root path route ("/")
  # root "articles#index"
end
