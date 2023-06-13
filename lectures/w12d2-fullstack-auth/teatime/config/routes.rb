Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    resources :teas, only: [:index, :create, :show]
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
  end
  
end
