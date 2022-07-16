Rails.application.routes.draw do
  resources :reviews
  resources :coffees
  resources :users
  resources :orders
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    # route to test your configuration
  get '/hello', to: 'application#hello_world'
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/cart",  to: "sessions#showCart"
  patch '/cart',  to: "sessions#update"
  # get "/coffees/:id/reviews", to: "reviews#review_for_specific_coffee"
  get "/reviews", to: "reviews#index"
  post "/reviews", to: "reviews#create"
  patch "/reviews/:id", to: "reviews#update"
  delete "/reviews/:id", to: "reviews#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
