import { Card } from './Timeline/Card'

export const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {[1, 2, 3, 4, 5].map((i, _index) => (
        <Card
          published="2022-12-11"
          title="Application UI code in Tailwind CSS"
          description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
        />
      ))}
    </ol>
  )
}
