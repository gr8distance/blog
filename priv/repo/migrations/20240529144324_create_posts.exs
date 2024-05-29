defmodule Blog.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :title, :string, null: false
      add :published_at, :naive_datetime, null: false

      timestamps(type: :utc_datetime)
    end

    create index(:posts, [:title], unique: true)
  end
end
