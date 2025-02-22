import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Twitter, Github, ChevronRight } from "lucide-react"

export default function ProfilePane() {
  return (
    <Card className="bg-white text-gray-800 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold">プロフィール</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-22%200.25.02-M9K5Xi1H2buNirroCxHvH6TkwLKyyl.png"
            alt="秋の紅葉をバックに両手を挙げて喜ぶランナーの姿"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">UG</h3>
        <p className="text-center text-sm text-gray-600 mb-4">好きこそものの上手なれ</p>

        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://www.strava.com/athletes/your_strava" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-orange-500 hover:text-orange-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
            </svg>
          </a>
          <a href="https://bsky.app/profile/your_bluesky" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-blue-500 hover:text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13.5h-15L12 6.5z" />
            </svg>
          </a>
        </div>

        <div className="mt-4 text-center">
          <Link href="/author" className="text-blue-500 hover:text-blue-700 flex items-center justify-center">
            <span>もっと詳しく</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

