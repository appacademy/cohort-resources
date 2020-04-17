Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # nesting routes under an api namespace
  namespace :api do 
    resources :teas, only: [:index, :create]
  end

  # root to static pages controller, root method
  root to: 'static_pages#root'
end
