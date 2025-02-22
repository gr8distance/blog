#!/bin/bash

# 記事ファイルのパターンを定義
ARTICLES_DIR="src/pages/articles"

# 各記事ファイルに対して処理を実行
for file in "$ARTICLES_DIR"/*.astro; do
  # 一時ファイルを作成
  temp_file=$(mktemp)

  # 最初の9行を削除
  tail -n +10 "$file" > "$temp_file"

  # 10行目が<Layoutで始まるかチェック
  first_line=$(head -n 1 "$temp_file")
  if [[ ! "$first_line" =~ ^[[:space:]]*\<Layout ]]; then
    # <Layoutで始まらない場合、さらに1行削除
    tail -n +2 "$temp_file" > "$temp_file.2"
    mv "$temp_file.2" "$temp_file"
  fi

  # 元のファイルを更新
  mv "$temp_file" "$file"
done
