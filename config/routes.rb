Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: "json"} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]
    resources :channels, only: [:index,:show,:create, :destroy]
    resources :messages, only: [:index, :show, :update, :destroy]
    resources :channel_users, only: [:create,:destroy]
  end

end
