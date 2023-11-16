defmodule PublisherWeb.ApiController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  def all(conn, _params) do
    render(conn, "all.json", posts: Blog.all())
  end
end
