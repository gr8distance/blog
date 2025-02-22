export interface Star {
  id: number
  top: number
  left: number
  size: "small" | "medium" | "large"
  delay: number
}

export function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: ["small", "medium", "large"][Math.floor(Math.random() * 3)] as Star["size"],
    delay: Math.random() * 3,
  }))
}

