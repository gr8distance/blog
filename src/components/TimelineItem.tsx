import { ArticleCard } from "./ArticleCard"
import { DateBadge } from "./DateBadge"
import type { BlogPost } from "@/types/blog"

interface TimelineItemProps extends BlogPost {
  index: number
}

export function TimelineItem({ id, date, title, content, thumbnail, category, index }: TimelineItemProps) {
  const isEven = index % 2 === 0

  const colors = [
    "bg-slate-700", // Dark blue
    "bg-amber-300", // Yellow
    "bg-rose-400", // Pink
  ]

  const backgroundColor = colors[index % colors.length]
  const articleUrl = `/articles/${id}`

  return (
    <div className={`flex items-center mb-8 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className={`w-full md:w-[45%] ${isEven ? "md:pl-2" : "md:pr-2"}`}>
        <ArticleCard
          title={title}
          content={content}
          thumbnail={thumbnail}
          category={category}
          articleUrl={articleUrl}
        />
      </div>

      <div className="hidden md:flex md:w-[10%] justify-center">
        <div className={`w-4 h-4 rounded-full ${backgroundColor} border-4 border-white shadow-md`} />
      </div>

      <div className={`hidden md:block md:w-[45%] ${isEven ? "md:pr-2 text-right" : "md:pl-2"}`}>
        <DateBadge date={date} color={backgroundColor} />
      </div>

      {/* Mobile date display */}
      <div className="md:hidden absolute left-0 -ml-3 mt-2">
        <div className={`${backgroundColor} w-6 h-6 rounded-full flex items-center justify-center`}>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}
