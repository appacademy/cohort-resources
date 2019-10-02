Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :chirps, only: [:index, :new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]
end
