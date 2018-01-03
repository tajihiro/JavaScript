defmodule InActionWeb.PageController do
  use InActionWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def main(conn, _params) do
    render conn, "main.html"
  end


  def sample01(conn, _params) do
    render conn, "sample01.html"
  end

  def sample02(conn, _params) do
    render conn, "sample02.html"
  end

  def sample03(conn, _params) do
    render conn, "sample03.html"
  end

end
