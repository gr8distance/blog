import Link from "next/link"

interface PopularArticle {
  title: string
  slug: string
  thumbnail: string
}

const popularArticles: PopularArticle[] = [
  {
    title: "富士ヒルクライム2023",
    slug: "fuji-hill-climb-2023",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6857-u6n7EoOdRYHYcBGftIiSL9Mz8lvBfs.jpeg",
  },
  {
    title: "内浦400(後編)",
    slug: "uchiura-400-part-2",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48658-LoveLive_SunShine-OharaMari-PC-Wallpaper.jpg-mouMwiQfb6kOee4GnMpU9U4wi7GAEZ.jpeg",
  },
  {
    title: "チェレステに魅せられて",
    slug: "fascinated-by-celeste",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48658-LoveLive_SunShine-OharaMari-PC-Wallpaper.jpg-mouMwiQfb6kOee4GnMpU9U4wi7GAEZ.jpeg",
  },
]

export function PopularArticles() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">人気の記事</h2>
      <div className="space-y-4">
        {popularArticles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index} className="block">
            <div className="relative h-24 rounded-lg overflow-hidden">
              <img
                src={article.thumbnail || "/placeholder.svg"}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Frosted Glass Effect */}
              <div className="absolute inset-0 backdrop-blur-md bg-white/30" />
              {/* Content Overlay */}
              <div className="absolute inset-0 p-3 flex items-center">
                <h3 className="text-sm font-medium text-white shadow-text line-clamp-2">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

