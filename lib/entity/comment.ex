defmodule Entity.Comment do
  @type t :: %__MODULE__{
          id: String.t(),
          post_id: String.t(),
          content: String.t(),
          author: String.t(),
          commented_at: DateTime.t()
        }
  defstruct id: "", post_id: "", content: "", author: "", commented_at: nil
end
