Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' 

  namespace :api, defaults: { format: :json } do
    resources :shirts, only: [:index, :create, :show]
  end
  
end
