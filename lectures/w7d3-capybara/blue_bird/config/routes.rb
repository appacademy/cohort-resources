Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'
  resources :users

  # one session per user -> simplifies db so we dont have to deal with session ids
  resource :session, only: [:new, :create, :destroy]
  resources :chirps, except: [:edit]
end
