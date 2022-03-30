Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #HTTP_verb path to: name_of_controller#name_of_method
  # get "/chirps", to: "chirps#index"
  # post "/chirps", to: "chirps#create"
  # patch "/chirps/:id", to: "chirps#update"
  # #:id is a wildcard
  # get "/chirps/:id", to: "chirps#show"


  resources :chirps, only: [:index, :show, :create, :update, :destroy]

end
