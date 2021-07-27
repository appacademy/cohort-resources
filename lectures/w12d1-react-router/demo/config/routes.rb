Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :create, :update, :destroy] do
      resources :steps, only: [:index, :create]
    end

    resources :steps, only: [:update, :destroy]
  end
end
