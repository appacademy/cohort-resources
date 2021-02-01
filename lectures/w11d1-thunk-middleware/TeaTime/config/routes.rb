Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :teas, only: [:index, :create]
  end

  root to: "static_pages#root" 
  #go to static_pages controller and invoke root function
  #root to: => goes to the "/"
  #root is a key word == "/"
end
