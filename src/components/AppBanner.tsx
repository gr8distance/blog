import { Bike } from "lucide-react"

interface ArticleBannerProps {
  title: string
  date: string
  category: string
  thumbnail: string
}

export function ArticleBanner({ title, date, category, thumbnail }: ArticleBannerProps) {
  return (
    <div className="relative w-full h-[400px] mb-8 overflow-hidden">
      <img
        src={thumbnail || "/placeholder.svg"}
        alt={`Banner image for ${title}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
        <div className="flex items-center gap-4 text-white">
          <time dateTime={date}>{date}</time>
          <div className="bg-blue-500 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-sm font-medium">
            <Bike className="w-4 h-4" />
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
