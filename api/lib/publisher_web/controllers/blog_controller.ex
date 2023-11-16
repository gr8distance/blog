defmodule PublisherWeb.BlogController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  def index(conn, _params) do
    render(conn, "index.html", posts: Blog.all())
  end

  def show(conn, %{"id" => id}) do
    render(conn, "show.html", post: Blog.find(id))
  end
end
