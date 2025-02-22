interface DateBadgeProps {
  date: string
  color: string
}

export function DateBadge({ date, color }: DateBadgeProps) {
  return (
    <div className={`${color} text-white px-4 py-2 inline-block rounded-full shadow-lg`}>
      <span className="text-sm md:text-base font-bold">{date}</span>
    </div>
  )
}

