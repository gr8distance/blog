defmodule UseCase.PostCreator do
  alias Adapter.{PostCreatorAdapter, PostEntityAdapter}
  alias Entity.{Post}

  # @spec execute(args :: map(), adapter :: module(), repo :: module()) :: {:ok, Post.t()} | {:error, Post.t()}
  def execute(args, adapter, repo) do
    case create_post(args, adapter, repo) do
      {:ok, changeset} ->
        # TODO: 保存成功時の処理を記述
        nil

      {:error, changeset} ->
        # TODO: 失敗時の処理を記述
        nil
    end
  end

  defp create_post(args, adapter, repo) do
    repo.transaction(fn ->
      args
      |> to_entity()
      |> adapter.to_schema()
      |> repo.insert()
    end)
  end

  defp to_entity(args) do
    %Post{
      id: Ecto.UUID.generate(),
      title: args.title,
      body: args.body,
      published_at: args.published_at
    }
  end
end
