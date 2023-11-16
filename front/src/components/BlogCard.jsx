export const BlogCard = () => {
  return (
    <div>
      <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

      <div class="mt-8">
        <span class="text-blue-500 uppercase">category</span>

        <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          What do you want to know about UI
        </h1>

        <p class="mt-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
          recusandae nulla veritatis id tempore sapiente
        </p>

        <div class="flex items-center justify-between mt-4">
          <div>
            <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
              John snow
            </a>

            <p class="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
          </div>

          <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
        </div>
      </div>
    </div>
  )
};
