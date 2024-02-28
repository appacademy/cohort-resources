Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"



  # manually create routes

  # verb '/path', to: 'controller#action_name'
  # get '/users', to: 'users#index'


  # resources :users, only: [:index, :show, :create, :update, :destroy]
  # resources :users, except: [:new, :edit] do 
  resources :users do
    resources :chirps, only: [:index]
  end 

  resources :chirps, only: [:index]

  # create routes to hit the sessions_controller 
  # we only are ever dealing with 1 session at a time
  # so we use singular resource NOT resources
  resource :session, only: [:new, :create, :destroy]
  
end
