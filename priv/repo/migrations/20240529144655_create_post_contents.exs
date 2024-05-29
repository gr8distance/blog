defmodule Blog.Repo.Migrations.CreatePostContents do
  use Ecto.Migration

  def change do
    create table(:post_contents, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :body, :string, null: false
      add :post_id, references(:blog_posts, on_delete: :nothing, type: :binary_id)

      timestamps(type: :utc_datetime)
    end

    create index(:post_contents, [:post_id])
  end
end
