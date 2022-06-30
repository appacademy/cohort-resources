Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' # where we go if we hit localhost:3000/

  # localhost:3000/api/teas
  namespace :api, defaults: {format: :json} do
    resources :teas, only: [:index, :create]
  end
end
