import { Meta } from '@/types/Meta'
import { Article } from '@/types/Article'
import { Title } from '@/components/Article/Title'
import { Me } from '@/components/Me'
import { Timeline } from '@/components/Timeline'

const encode = (tag: string) => {
  if (process.env.NODE_ENV == 'development') {
    return encodeURIComponent(tag)
  } else {
    return tag
  }
}

export const generateStaticParams = async () => {
  const metas = Meta.newAll()
  const tags = Array.from(new Set(metas.map((meta) => meta.tags).flat()))
  return tags.map((tag) => {
    return {
      id: encode(tag)
    }
  })
}

const Page = (props: { params: { id: string } }) => {
  const { id } = props.params
  const decodedId = decodeURI(id)
  const articles = Article.newAll().filter((article) => {
    return article.tags.includes(decodedId)
  })

  return (
    <div className="bg-gray-900">
      <div className="px-5 sm:w-full lg:w-3/4 mx-auto">
        <Title title='' subtitle={`#${decodedId}`} />
        <div className="flex">
          <div className="w-1/3 mx-5">
            <Me />
          </div>
          <div className="w-2/3 mx-5">
            <Timeline articles={articles} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
