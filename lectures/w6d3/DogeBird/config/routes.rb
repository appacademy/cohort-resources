Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # method '/path', to: 'controller_name#specific_method'

  # get '/users' , to: 'users#index'

  # post '/users', to: 'users#create'

  resources :users, except: [:edit, :new]
  



end
