Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # method '/path', to: 'controller_name#specific_method'

  # get '/users' , to: 'users#index'

  # post '/users', to: 'users#create'

  resources :users # we are now going to use the `new` and `edit` actions
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # get '/users/new', to: 'users#new'
  # get '/users/:id/edit', to: 'users#edit'



end
