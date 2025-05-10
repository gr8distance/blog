"use client"

import { useState } from "react"
import type React from "react"
import { useMemo } from "react"
import { Search } from "lucide-react"

interface Star {
  id: number
  top: number
  left: number
  size: "small" | "medium" | "large"
  delay: number
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: ["small", "medium", "large"][Math.floor(Math.random() * 3)] as Star["size"],
    delay: Math.random() * 5,
  }))
}

export default function Header() {
  const stars = useMemo(() => generateStars(240), [])
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <header className="bg-gradient-to-b from-black via-blue-900 to-blue-800 text-white py-12 sticky top-0 z-50 transition-all duration-300 relative opacity-100">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star star-${star.size}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animation: `twinkle 4s infinite ${star.delay}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto flex justify-between items-center px-4 relative z-20">
        <div className="flex justify-between items-center w-full">
          <a href="/" className="text-3xl font-bold tracking-tight">
            GreatDistance
            <p className="text-xs font-normal tracking-tight text-center">~好きこそ物の上手なれ~</p>
          </a>

          {/* TODO: フォーム復活 */}
          {/* <form onSubmit={handleSubmit} className="relative max-w-xl w-full md:w-96">
            <input
              type="text"
              placeholder="記事を検索"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 px-4 rounded-lg border border-white/20 bg-black/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              <Search size={20} />
            </button>
          </form> */}
        </div>
      </div>
    </header>
  )
}
