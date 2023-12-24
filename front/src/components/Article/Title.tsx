import Link from 'next/link'

export const Title = (props: { title: string, subtitle: string }) => {
  const { title, subtitle } = props
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-thin text-transparent sm:text-5xl"
          >
            <Link href="/">
              gr8distance
            </Link>
            <span className="sm:block text-2xl mt-5 font-300">{subtitle}</span>
          </h1>
        </div>
      </div>
    </section >
  )
}
