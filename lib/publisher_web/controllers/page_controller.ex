defmodule PublisherWeb.PageController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  def index(conn, _params) do
    render(conn, "index.html", posts: Blog.all())
  end

  def about(conn, _params) do
    render(conn, "about.html", posts: Blog.all())
  end

  def history(conn, _params) do
    render(conn, "history.html", posts: Blog.all())
  end

  def reviews(conn, _params) do
    render(conn, "reviews.html", posts: Blog.all())
  end
end
