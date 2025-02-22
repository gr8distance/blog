import { Twitter, Github } from "lucide-react"

interface AuthorProfileProps {
  name: string
  bio: string
  avatar: string
  links: {
    twitter?: string
    github?: string
    strava?: string
    bluesky?: string
  }
}

export function AuthorProfile({ name, bio, links }: AuthorProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <img src={"/placeholder.svg"} alt={name} width={80} height={80} className="rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {links.twitter && (
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <Twitter size={24} />
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <Github size={24} />
          </a>
        )}
        {links.strava && (
          <a
            href={links.strava}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
            </svg>
          </a>
        )}
        {links.bluesky && (
          <a
            href={links.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13.5h-15L12 6.5z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
