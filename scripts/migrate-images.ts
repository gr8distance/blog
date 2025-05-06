import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 設定
const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'pages', 'articles')
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'articles')

// 画像URLを抽出する正規表現
const IMG_URL_REGEX = /src="([^"]+)"/
const THUMBNAIL_REGEX = /const\s+thumbnail\s*=\s*"([^"]+)"/

// 画像をダウンロードする関数
async function downloadImage(url: string, outputPath: string): Promise<void> {
  // ローカルパスの場合はスキップ
  if (url.startsWith('/')) {
    console.log(`Skipping local image: ${url}`);
    return;
  }

  return new Promise((resolve, reject) => {
    try {
      // URLから不要な文字を削除
      const cleanUrl = url.trim();
      console.log(`Downloading: ${cleanUrl}`);

      https.get(cleanUrl, (response) => {
        if (response.statusCode === 200) {
          // 出力ディレクトリを作成
          const outputDir = path.dirname(outputPath);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          // ファイルに保存
          const fileStream = fs.createWriteStream(outputPath);
          response.pipe(fileStream);

          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded: ${outputPath}`);
            resolve();
          });
        } else {
          reject(new Error(`Failed to download ${cleanUrl}: ${response.statusCode}`));
        }
      }).on('error', (err) => {
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
}

// 記事を処理する関数
async function processArticle(filePath: string): Promise<void> {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.astro');
    let newContent = content;
    let match;

    // 最初の画像を探す
    const firstImageMatch = IMG_URL_REGEX.exec(content);
    if (firstImageMatch) {
      const [_, firstImageUrl] = firstImageMatch;

      // サムネイル用の画像を保存
      const thumbnailPath = path.join(
        process.cwd(),
        'public',
        'thumbnails',
        `${fileName}.jpg`
      );

      try {
        await downloadImage(firstImageUrl, thumbnailPath);
        // サムネイルの設定を更新
        const thumbnailRelativePath = `/thumbnails/${fileName}.jpg`;
        newContent = newContent.replace(
          THUMBNAIL_REGEX,
          `const thumbnail = "${thumbnailRelativePath}"`
        );
      } catch (err) {
        console.error(`Failed to download thumbnail ${firstImageUrl}:`, err);
      }
    }

    // 記事内の他の画像を処理
    while ((match = IMG_URL_REGEX.exec(content)) !== null) {
      const [fullMatch, url] = match;
      if (!url) continue;

      // 既にローカルパスの場合はスキップ
      if (url.startsWith('/images/articles/')) {
        continue;
      }

      // 画像の保存先パスを生成
      const imageNumber = Math.floor(Math.random() * 1000);
      const outputPath = path.join(
        process.cwd(),
        'public',
        'images',
        'articles',
        fileName,
        `image-${imageNumber}.jpg`
      );

      try {
        await downloadImage(url, outputPath);
        // URLを相対パスに置換
        const relativePath = outputPath.replace(path.join(process.cwd(), 'public'), '');
        newContent = newContent.replace(url, relativePath);
      } catch (err) {
        console.error(`Failed to download ${url}:`, err);
      }
    }

    // 更新された内容を保存
    fs.writeFileSync(filePath, newContent);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

// メイン関数
async function main() {
  try {
    // 画像保存用ディレクトリを作成
    const imagesDir = path.join(process.cwd(), 'public', 'images', 'articles');
    const thumbnailsDir = path.join(process.cwd(), 'public', 'thumbnails');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    if (!fs.existsSync(thumbnailsDir)) {
      fs.mkdirSync(thumbnailsDir, { recursive: true });
    }

    // 記事ファイルを取得
    const articlesDir = path.join(process.cwd(), 'src', 'pages', 'articles');
    const files = fs.readdirSync(articlesDir);

    // 各記事を処理
    for (const file of files) {
      if (file.endsWith('.astro')) {
        const filePath = path.join(articlesDir, file);
        console.log(`Processing ${filePath}...`);
        await processArticle(filePath);
      }
    }

    console.log('All articles processed successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();