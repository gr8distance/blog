defmodule Entity.Post do
  alias Entity.Comment

  @type t :: %__MODULE__{
          id: String.t(),
          title: String.t(),
          content: String.t(),
          published_at: DateTime.t(),
          comments: [Comment.t()]
        }
  defstruct id: "", title: "", content: "", published_at: nil, comments: []
end
