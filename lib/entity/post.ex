defmodule Entity.Post do
  alias Entity.Comment

  @type t :: %__MODULE__{
          id: String.t(),
          title: String.t(),
          body: String.t(),
          published_at: DateTime.t(),
          comments: [Comment.t()]
        }
  defstruct id: "", title: "", body: "", published_at: nil, comments: []

  def new(title, body, published_at) do
    %__MODULE__{
      id: Ecto.UUID.generate(),
      title: title,
      body: body,
      published_at: published_at,
      comments: []
    }
  end
end
