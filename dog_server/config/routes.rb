Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :dogs do
        resources :reviews
        resources :traits
        resources :activities
      end
      resources :users
      resource :session, only: [:create, :destroy]
      get "/session/current", to: "sessions#current" 
      # pots "rails/active_storage/direct_uploads", to: "direct_uploads#create"
    end
  end

end
