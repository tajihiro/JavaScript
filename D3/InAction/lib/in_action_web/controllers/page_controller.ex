defmodule InActionWeb.PageController do
  use InActionWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def main(conn, _params) do
    render conn, "main.html"
  end
end
