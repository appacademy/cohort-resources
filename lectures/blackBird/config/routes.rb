Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # this is where we define out routes



# VERB '/path' , to: 'controller#action'
  # get '/chirps', to: 'chirps#index'


  # restful routes

  # exludes these routes
  resources :chirps
  resources :users
  resource :session, only: [:new, :create, :destroy]
  # only make these routes
  # resources :chirps, only: [:create, :update, :destroy, :index]










  # create a custom route
  # get '/chirps', to: 'chirps#search'




end
