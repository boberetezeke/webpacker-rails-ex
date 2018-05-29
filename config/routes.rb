Rails.application.routes.draw do
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#dashboard"

  namespace :api do
    namespace :v1 do
      resources :todos, only: [:index, :create] do
        member do
          put :toggle
        end
      end
    end
  end
end

