import Link from "next/link"
import { Bike, User } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface CategoryListProps {
  categories: string[]
  posts: BlogPost[]
}

export function CategoryList({ categories, posts }: CategoryListProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "CYCLING":
        return <Bike className="w-6 h-6" />
      case "LIFE":
        return <User className="w-6 h-6" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "CYCLING":
        return "bg-blue-500"
      case "LIFE":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`${getCategoryColor(category)} p-3 rounded-full`}>{getCategoryIcon(category)}</div>
            <h2 className="text-2xl font-bold">{category}</h2>
          </div>
          <ul className="space-y-2">
            {posts
              .filter((post) => post.category === category)
              .map((post) => (
                <li key={post.id}>
                  <Link href={`/articles/${post.id}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

