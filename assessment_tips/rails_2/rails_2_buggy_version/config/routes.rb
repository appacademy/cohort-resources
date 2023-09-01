Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:new, :create, :show, :index] do
    resources :goals, only: [:create]
  end
  resources :session, only: [:new, :create, :destroy]
  resources :goals, only: [:destroy]
end
