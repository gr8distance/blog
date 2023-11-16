defmodule PublisherWeb.ApiView do
  use PublisherWeb, :view

  require IEx

  alias PublisherWeb.PageView

  def render("all.json", %{posts: posts}) do
    %{posts: render_posts(posts)}
  end

  defp render_posts(posts) do
    posts
    |> Enum.map(fn post ->
      render_post(post)
    end)
  end

  defp render_post(post) do
    %{
      id: post.id,
      author: post.author,
      body: post.body,
      date: post.date,
      description: post.description,
      header_image: PageView.header_image(post),
      keywords: post.keywords,
      tags: post.tags,
      title: post.title,
      year: post.year,
      month: post.month,
      day: post.day
    }
  end
end
