defmodule InActionWeb.Router do
  use InActionWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", InActionWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/main", PageController, :main
    get "/sample01", PageController, :sample01
    get "/sample02", PageController, :sample02
    get "/sample03", PageController, :sample03
  end

  # Other scopes may use custom stacks.
  # scope "/api", InActionWeb do
  #   pipe_through :api
  # end
end
