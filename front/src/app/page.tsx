import { Timeline } from '../components/Timeline'
import { Hero } from '@/components/Hero'
import { Me } from '@/components/Me'
import { Article } from '@/types/Article'

const Home = () => {
  const articles = Article.newAll()
  return (
    <div className="bg-gray-900">
      <div className="px-5 sm:w-full lg:w-3/4 mx-auto">
        <Hero />
        <div className="flex">
          <div className="md:w-1/3 mx-5 xs:hidden sm:block">
            <Me />
          </div>
          <div className="sm:w-full md:w-2/3 mx-5 sm:block">
            <Timeline articles={articles} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
