Rails.application.routes.draw do
root to: 'boards#index'
resources :travels, only: :index
end
