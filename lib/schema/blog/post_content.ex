defmodule Schema.Blog.PostContent do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "post_contents" do
    field :body, :string
    belongs_to :post, Schema.Blog.Post, foreign_key: :post_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(post_content, attrs) do
    post_content
    |> cast(attrs, [:body, :post_id])
    |> validate_required([:body, :post_id])
  end
end
