defmodule PublisherWeb.PageView do
  use PublisherWeb, :view

  require IEx

  def header_image(post) do
    if post.header_image == "" do
      try do
        extract_image(post.body)
      rescue
        e in _ -> "/images/noimage.png"
      end
    else
      "/images/#{post.header_image}"
    end
  end

  defp extract_image(body) do
    {_, [{_, src}, _], _} =
      body
      |> Floki.parse_document!()
      |> Floki.find("img")
      |> List.first()

    src
  end

  def truncate(str), do: truncate(str, 1)

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
