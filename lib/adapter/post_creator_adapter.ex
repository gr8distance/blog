defmodule Adapter.PostCreatorAdapter do
  def build_args(args) do
    %{
      title: args.title,
      body: args.body,
      published_at: args.published_at
    }
  end
end
