import InfiniteScroll from "react-infinite-scroll-component"
import { TimelineItem } from "../components/TimelineItem"
import { Sidebar } from "../components/Sidebar"
import type { TimelineTemplateProps } from "@/types/blog"

export function TimelineTemplate({ posts, hasMore, onLoadMore }: TimelineTemplateProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2 z-0" />

            <InfiniteScroll
              dataLength={posts.length}
              next={onLoadMore}
              hasMore={hasMore}
              loader={<h4 className="text-center">Loading...</h4>}
              endMessage={
                <p className="text-center">
                  <b>全ての記事を表示しました</b>
                </p>
              }
            >
              {posts.map((post, index) => (
                <TimelineItem key={post.id} {...post} date={formatDate(post.date)} index={index} />
              ))}
            </InfiniteScroll>
          </div>
          <Sidebar />
        </div>
      </main>
    </div>
  )
}
