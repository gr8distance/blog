import type React from "react"
import Link from "next/link"
import { ChevronRight, Bike, User } from "lucide-react"

interface Category {
  name: string
  slug: string
  icon: React.ReactNode
  color: string
}

const popularCategories: Category[] = [
  { name: "自転車", slug: "cycling", icon: <Bike className="w-4 h-4" />, color: "bg-blue-500" },
  { name: "生活", slug: "life", icon: <User className="w-4 h-4" />, color: "bg-green-500" },
  // 必要に応じて他のカテゴリを追加
]

export function PopularCategories() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">人気のカテゴリ</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {popularCategories.map((category) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            className={`flex items-center ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity duration-200`}
          >
            {category.icon}
            <span className="ml-1">{category.name}</span>
          </Link>
        ))}
      </div>
      <Link href="/categories" className="inline-flex items-center text-blue-600 hover:underline">
        <span>全てのカテゴリを見る</span>
        <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  )
}

