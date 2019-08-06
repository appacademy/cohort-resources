Rails.application.routes.draw do
  # get 'sessions/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'

  resources :users do
    resources :chirps, only: [:index]
  end

  resources :chirps, only: [:show]
  resource :session, only:[:new, :create, :destroy]
  
end