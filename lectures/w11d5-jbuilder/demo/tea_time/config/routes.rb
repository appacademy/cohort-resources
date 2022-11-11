Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # nesting routes under an api namespace
  # need the defaults part to render json jbuilder files
  namespace :api, defaults: {format: :json} do 
    resources :teas, only: [:index, :create, :show]
  end

  # root to static pages controller, root method
  root to: 'static_pages#root'
end
