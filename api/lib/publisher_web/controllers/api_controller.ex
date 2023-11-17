defmodule PublisherWeb.ApiController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  def all(conn, _params) do
    render(conn, "all.json", posts: Blog.all())
  end

  def fetch(conn, %{"id" => id}) do
    render(conn, "fetch.json", post: Blog.find(id))
  end
end
