defmodule PublisherWeb.PageView do
  use PublisherWeb, :view

  def truncate(str), do: truncate(str, 2)

  def truncate(str, length) do
    str
    |> String.split("</p>")
    |> Enum.slice(0, length)
    |> Enum.concat(["<span> ...</span>"])
    |> Enum.join("</p>")
    |> String.replace("<p>", "<span>")
    |> String.replace("</p>", "</span>")
  end
end
