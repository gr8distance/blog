import { PopularArticles } from "./PopularArticles"
import { PopularCategories } from "./PopularCategories"
import ProfilePane from "./ProfilePane"

export function Sidebar() {
  return (
    <aside className="w-full md:w-1/4">
      <div className="md:sticky md:top-20 space-y-6">
        <PopularArticles />
        <PopularCategories />
        <ProfilePane />
      </div>
    </aside>
  )
}

