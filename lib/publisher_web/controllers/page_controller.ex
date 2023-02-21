defmodule PublisherWeb.PageController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  require IEx

  def index(conn, %{"page" => page}) do
    posts = Blog.all() |> Blog.page(String.to_integer(page))
    render(conn, "index.html", posts: posts, page: String.to_integer(page), q: "", tag: "")
  end

  def index(conn, _params) do
    posts = Blog.all() |> Blog.page(1)
    render(conn, "index.html", posts: posts, page: 1, q: "", tag: "")
  end

  def search(conn, %{"q" => q}) do
    posts = Blog.search(q)
    render(conn, "index.html", posts: posts, q: q, tag: "")
  end

  def tag(conn, %{"id" => tag}) do
    posts = Blog.search_by_tag(tag)
    render(conn, "index.html", posts: posts, q: "", tag: tag)
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
