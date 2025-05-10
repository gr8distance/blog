import { CategoryBadge } from "./CategoryBadge"

interface ArticleCardProps {
  title: string
  content: string
  thumbnail: string
  category?: "CYCLING" | "LIFE"
  articleUrl: string
}

export function ArticleCard({ title, content, thumbnail, category, articleUrl }: ArticleCardProps) {
  return (
    <a href={articleUrl} className="block">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-64 cursor-pointer">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-md bg-white/30" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold mb-2 text-white shadow-text">{title}</h3>
          <p className="text-sm text-white mb-4 line-clamp-2 shadow-text">{content}</p>
          <div className="flex flex-wrap gap-2">
            {category?.split(",").map((cate) => {
              return <CategoryBadge key={cate} category={cate} />
            })}
          </div>
        </div>
      </div>
    </a>
  )
}
