import { Card } from './Timeline/Card'
import { Article } from '../types/Article'

export const Timeline = (props: { articles: Article[] }) => {
  const { articles } = props
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {articles.map((article, i) => (
        <Card
          key={i}
          article={article}
          published={article.date}
          title={article.name}
          description={""}
        />
      ))}
    </ol>
  )
}
