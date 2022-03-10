Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # We can make ajax calls to these routes for data (push, get, patch, destroy)
  # These calls will use routes like '/api/teas' for the url in ajax requests
  # Rails is not an API like one you may have used on a JS project
  namespace :api, defaults: {format: :json} do 
    resources :teas, only: [:index, :create]
  end

  root to: 'static_pages#root'

end
