"use client"

import { useMemo } from "react"
import { generateStars } from "../utils/stars"

interface StarryBackgroundProps {
  starCount: number
  className?: string
}

export default function StarryBackground({ starCount, className = "" }: StarryBackgroundProps) {
  const stars = useMemo(() => generateStars(starCount), [starCount])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
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
  )
}

