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
    __MODULE__.all_posts()
    |> Enum.sort_by(& &1.date)
    |> Enum.reverse()
  end

  def all_tags, do: @tags

  def find(id) do
    Enum.find(all, &(&1.id == id)) || raise NotFoundError, "post with id=#{id} not found"
  end
end
