import { BlogCard } from './BlogCard';

export const BlogContainer = () => {
  return (
    <div class="w-full dark:bg-gray-900 pt-10">
      <div class="w-3/4 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
          {[0,1,2,3,4,5].map((i, index) => (
            <BlogCard />
          ))}
        </div>
      </div>
    </div>
  )
};
