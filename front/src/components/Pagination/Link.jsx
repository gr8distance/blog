import Link from 'next/link';

export const PaginateLink = (props) => {
  const { index } = props
  return (
    <Link href={`/posts/paginate/${index}`} class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
      {index}
    </Link>
  )
}
