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
  
end
