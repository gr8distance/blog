export interface BlogPost {
  id: string
  date: string
  title: string
  content: string
  thumbnail: string
  category?: "CYCLING" | "LIFE"
}

export interface TimelineTemplateProps {
  posts: BlogPost[]
  hasMore: boolean
  onLoadMore: () => void
}

