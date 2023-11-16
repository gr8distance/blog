import { BlogCard } from './BlogCard';

export const BlogContainer = (props) => {
  const {posts} = props;

  return (
    <div className="w-full dark:bg-gray-900 pt-10">
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard post={post} />
          ))}
        </div>
      </div>
    </div>
  )
};
