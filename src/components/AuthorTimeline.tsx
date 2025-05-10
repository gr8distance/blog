import { ChevronRight } from "lucide-react"
import type { AuthorEvent } from "@/types/author"

interface AuthorTimelineProps {
  events: AuthorEvent[]
}

export function AuthorTimeline({ events }: AuthorTimelineProps) {
  const getEventColor = (type: AuthorEvent["type"]) => {
    switch (type) {
      case "brevet":
        return "bg-green-500"
      case "trail running":
        return "bg-orange-500"
      case "hillclimbing race":
      case "race":
      case "road race":
        return "bg-red-500"
      case "GreatDistance":
        return "bg-purple-500"
      case "life":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {events.map((event) => (
        <div key={event.id} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className={`rounded-full ${getEventColor(event.type)} w-4 h-4`} />
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="pb-8">
            <div className="flex items-center mb-1">
              <div className="text-sm text-gray-500 mr-2">{event.date}</div>
              <div className={`text-xs font-semibold ${getEventColor(event.type)} text-white px-2 py-1 rounded`}>
                {event.type.toUpperCase()}
              </div>
            </div>
            <div className="text-lg font-semibold">{event.title}</div>
            {event.description && <p className="text-gray-600 mt-1">{event.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
