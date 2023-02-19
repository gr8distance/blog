defmodule PublisherWeb.PageController do
  use PublisherWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
