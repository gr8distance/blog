import { Title } from '@/components/Article/Title'
import { Body } from '@/components/Article/Body'
import { Article } from '@/types/Article'

export const generateStaticParams = async () => {
  const articles = Article.newAll()
  return articles.map((article, _) => {
    return {
      year: article.year,
      month: article.month,
      id: article.encodedName()
    }
  })
};

const Page = (props: { params: { year: string, month: string, id: string } }) => {
  const { id, year, month } = props.params
  const article = Article.new(year, month, id)

  return (
    <div className="bg-gray-900">
      <div className="px-5 sm:w-full lg:w-1/2 mx-auto py-5">
        <Title title='' subtitle={article.name} />
        <Body article={article} />
      </div>
    </div>
  )
}

export default Page
