import Link from 'next/link';

export const BlogTop = (props) => {
  const { post } = props;
  console.log(post);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Link href={`posts/${post.id}`}>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={`${post.header_image === "" ? 'repalceme.png' : post.header_image}`}/>
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">category</p>

              <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">{post.title}</h1>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {post.body.slice(0, 100)}
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author}</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
