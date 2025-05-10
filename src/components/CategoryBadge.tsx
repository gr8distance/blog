import { Bike, Badge, User } from "lucide-react"

interface CategoryBadgeProps {
  category: string
}

const categoryConfig = {
  CYCLING: {
    icon: Bike,
    color: "bg-blue-500",
    label: "自転車",
  },
  LIFE: {
    icon: User,
    color: "bg-green-500",
    label: "生活",
  },
} as const

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = categoryConfig[category as keyof typeof categoryConfig] ?? {
    icon: Badge,
    color: "bg-gray-500",
    label: category,
  }
  const Icon = config.icon

  return (
    <span
      className={`
        ${config.color} text-white px-3 py-1.5 rounded-full
        inline-flex items-center gap-1.5 text-sm font-medium shadow-md self-start
        hover:opacity-80 transition-opacity cursor-pointer
      `}
    >
      <Icon className="w-4 h-4" />
      <span>{config.label}</span>
    </span>
  )
}
