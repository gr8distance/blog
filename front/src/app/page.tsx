import { Timeline } from '../components/Timeline'
import { Paginate } from '@/components/Paginate'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="bg-gray-900">
      <div className="px-5 sm:w-full lg:w-1/2 mx-auto">
        <Hero />
        <Timeline />
        <div className="py-3">
          <Paginate />
        </div>
      </div>
    </div>
  )
}
