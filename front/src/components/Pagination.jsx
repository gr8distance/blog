import Link from 'next/link';
import { PaginateLink } from './Pagination/Link';

export const Pagination = () => {
  return (
    <div class="bg-gray-900 w-full py-5">
      <div class="flex justify-center">
        <a href="#" class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
          <div class="flex items-center -mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </div>
        </a>
        {[1,2,3].map((i, _) => (
          <PaginateLink index={i} />
        ))}

        <a href="#" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          <div class="flex items-center -mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
