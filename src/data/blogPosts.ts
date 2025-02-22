import type { BlogPost } from "@/types/blog"
import fs from "fs"
import path from "path"

const blogPosts = () => {
  const blogPostsDir = path.join(process.cwd(), "src", "pages", "articles")
  const blogPosts = fs.readdirSync(blogPostsDir).filter((post) => post.endsWith(".astro"))
  return blogPosts.map((post) => {
    const id = post.split(".")[0]
    const title = post.split("-")[3].split(".")[0]
    const date = post.split("-")[0] + "-" + post.split("-")[1] + "-" + post.split("-")[2]
    const content = fs.readFileSync(path.join(blogPostsDir, post), "utf8")
    const thumbnailMatch = content.match(/const thumbnail = .*/)
    const thumbnail = thumbnailMatch ? thumbnailMatch[0].split("=")[1].trim().split("\"")[1].split("\"")[0] : "/thumbnails/placeholder.svg"
    const labelMatch = content.match(/const labels = .*/)
    const labels = labelMatch ? labelMatch[0].split("=")[1].trim() : "CYCLING"

    return {
      id: id,
      date: date,
      title: title,
      content: "",
      thumbnail: thumbnail,
      labels: labels
    }

  }).reverse()
}

export const BLOG_POSTS: BlogPost[] = blogPosts();