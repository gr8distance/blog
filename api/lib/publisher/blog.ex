defmodule Publisher.Blog do
  alias Publisher.Blog.Post

  require IEx

  use NimblePublisher,
    build: Post,
    from: Application.app_dir(:publisher, "priv/posts/**/*.md"),
    as: :posts,
    highlighters: [:makeup_elixir, :makeup_erlang]

  # The @posts variable is first defined by NimblePublisher.
  # Let's further modify it by sorting all posts by descending date.
  @posts Enum.sort_by(@posts, & &1.date, {:desc, Date})

  # Let's also get all tags
  @tags @posts |> Enum.flat_map(& &1.tags) |> Enum.uniq() |> Enum.sort()

  # And finally export them
  def all_posts, do: @posts

  def all do
    all_posts()
    |> Enum.sort(&(Timex.diff(&1.date, &2.date) > 0))
    |> Enum.filter(& &1.public)
  end

  def all_tags, do: @tags

  def page(posts, page \\ 1) do
    posts
    |> Enum.chunk_every(per())
    |> Enum.at(page - 1)
  end

  def search(q) do
    all()
    |> Enum.filter(fn post ->
      String.match?(post.title, ~r/#{q}/) || String.match?(post.body, ~r/#{q}/)
    end)
  end

  def search_by_tag(tag) do
    all
    |> Enum.filter(&Enum.member?(&1.tags, tag))
  end

  def per, do: 12

  def count do
    all |> length
  end

  def paginates do
    1..((length(all) / per()) |> Float.ceil() |> trunc)
  end

  def find(id) do
    Enum.find(all, &(&1.id == id)) || raise NotFoundError, "post with id=#{id} not found"
  end
end