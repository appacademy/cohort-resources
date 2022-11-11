Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/chirps', to: 'chirps#index'
  # get '/chirps/:id', to: 'chirps#show', as: 'chirp'
  # get '/chirps/new', to: 'chirps#new'
  # get '/chirps/:id/edit', to: 'chirps#edit'
  # post '/chirps', to: 'chirps#create'
  # patch '/chirps/:id', to: 'chirps#update'
  # put '/chirps/:id', to: 'chirps#update'
  # delete '/chirps/:id', to: 'chirps#destroy'

  # resources :chirps # get back all 7 routes
  # resources :chirps, only: [:create, :update, :show, :delete]
  resources :chirps, except: [:new, :edit, :index]

  resources :users do
    resources :chirps, only: [:index]
    # get '/users/:user_id/chirps', 'chirps#index'
  end

end
