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

  def sample04(conn, _params) do
    render conn, "sample04.html"
  end

  def sample05(conn, _params) do
    render conn, "sample05.html"
  end

  def sample06(conn, _params) do
    render conn, "sample06.html"
  end

  def sample07(conn, _params) do
    render conn, "sample07.html"
  end

  def sample08(conn, _params) do
    render conn, "sample08.html"
  end

  def sample09(conn, _params) do
    render conn, "sample09.html"
  end

  def sample10(conn, _params) do
    render conn, "sample10.html"
  end

end
