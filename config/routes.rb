Rails.application.routes.draw do
  # maybe nest vehicles with stations
  resources :vehicles
  resources :users
  resources :stations


  post '/login', to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
  get '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
