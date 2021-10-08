Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'

  #we keep this one because it has less symbols
  resources :users do
    resources :tweets, only: [:index]
  end

  resources :tweets, only: [:show]

  # resources :users, only: [:update, :destroy, :index, :show, :create]

  
end
