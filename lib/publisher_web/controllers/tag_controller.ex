defmodule PublisherWeb.TagController do
  use PublisherWeb, :controller

  alias Publisher.Blog

  def show(conn, %{"id" => id}) do
    render(conn, "show.html", post: Blog.find(id))
  end
end
