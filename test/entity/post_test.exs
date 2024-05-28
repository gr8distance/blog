defmodule Entity.PostTest do
  use BlogWeb.ConnCase

  alias Entity.Post

  require IEx

  test "newはEntityを作成する" do
    title = "タイトル"
    body = "本文"
    published_at = Timex.now()
    post = Post.new(title, body, published_at)
    assert post.title == title
    assert post.body == body
    assert post.published_at == published_at
  end
end
