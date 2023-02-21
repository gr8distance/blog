defmodule PublisherWeb.PageView do
  use PublisherWeb, :view

  require IEx

  def paginate_url(conn, page) do
    request_path = conn.request_path
    query_string = parse_query_string(conn.query_string)
    paginate_url(request_path, query_string, page)
  end

  def paginate_url(request_path, %{"q" => q}, page) do
    "#{request_path}?q=#{q}&page=#{page}"
  end

  def paginate_url(request_path, %{}, page) do
    "#{request_path}?page=#{page}"
  end

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

  defp parse_query_string(""), do: %{}

  defp parse_query_string(query_string) do
    query_string
    |> String.split("&")
    |> Enum.map(&String.split(&1, "="))
    |> Enum.map(fn [k, v] -> {k, v} end)
    |> Enum.into(%{})
  end
end
