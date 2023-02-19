defmodule Publisher.Blog.Post do
  @enforce_keys [:id, :author, :title, :body, :description, :tags, :date]
  defstruct [:id, :author, :title, :body, :description, :tags, :date, keywords: []]

  require IEx

  def build(filename, attrs, body) do
    [year, month_day_id] = parse_wrote_at(filename)
    [month, day, id] = parse_date_with_id(month_day_id)
    date = Date.from_iso8601!("#{year}-#{month}-#{day}")
    new([id: id, date: date, body: body] ++ Map.to_list(attrs))
  end

  defp new(attr) do
    struct!(__MODULE__, attr)
  end

  defp parse_wrote_at(filename) do
    filename
    |> Path.rootname()
    |> Path.split()
    |> Enum.take(-2)
  end

  defp parse_date_with_id(month_day_id) do
    String.split(month_day_id, "-", parts: 3)
  end
end
