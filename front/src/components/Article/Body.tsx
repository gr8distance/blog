import { Article } from '@/types/Article'

export const Body = (props: { article: Article }) => {
  const { article } = props
  return (
    <div id="body">
      <span dangerouslySetInnerHTML={{ __html: article.content() }} />
    </div>
  )
}
