import Link from 'next/link'

export const Tag = (props: { name: string }) => {
  const { name } = props
  return (
    <Link href={`/tags/${name}`}>
      <span className="cursor-pointer px-3 py-1 bg-blue-600 hover:bg-blue-400 text-white mx-2 rounded text-sm">{name}</span>
    </Link>
  )
}
