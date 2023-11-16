import Link from 'next/link';

export const BlogCard = (props) => {
  const {post} = props;
  console.log(post);

  return (
    <div>
      <Link href={`posts/${post.id}`}>
        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.header_image === "" ? 'repalceme.png' : post.header_image} />
        <div className="mt-8">
          <span className="text-blue-500 uppercase">category</span>

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            {post.title}
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
};
