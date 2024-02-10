Rails.application.routes.draw do
  resources :posts
  devise_for :users
  # get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  post "toogle_like", to: "likes#toggle_like", as: :toggle_like
end
