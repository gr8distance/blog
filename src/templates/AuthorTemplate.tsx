import { AuthorProfile } from "@/components/AuthorProfile"
import { AuthorTimeline } from "@/components/AuthorTimeline"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import type { Author, AuthorEvent } from "@/types/author"

interface AuthorTemplateProps {
  author: Author
  events: AuthorEvent[]
}

export function AuthorTemplate({ author, events }: AuthorTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <Breadcrumbs items={[{ label: "著者プロフィール", href: "/author" }]} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="md:col-span-1">
            <AuthorProfile {...author} />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">チャレンジタイムライン</h2>
            <AuthorTimeline events={events} />
          </div>
        </div>
      </main>
    </div>
  )
}
