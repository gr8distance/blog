import type { BlogPost } from "@/types/blog"
import fs from "fs"
import path from "path"

const blogPosts = () => {
  const blogPostsDir = path.join(process.cwd(), "src", "pages", "articles")
  const blogPosts = fs.readdirSync(blogPostsDir).filter((post) => post.endsWith(".astro"))
  return blogPosts.map((post) => {
    const id = post.split(".")[0]
    const dateMatch = post.match(/^(\d{4}-\d{2}-\d{2})-/)
    const date = dateMatch ? dateMatch[1] : ""
    const title = post.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(".astro", "")
    const content = fs.readFileSync(path.join(blogPostsDir, post), "utf8")
    const thumbnailMatch = content.match(/const thumbnail = .*/)
    const thumbnail = thumbnailMatch ? thumbnailMatch[0].split("=")[1].trim().split("\"")[1].split("\"")[0] : "/thumbnails/placeholder.svg"
    const categoryMatch = content.match(/const category = .*/)
    const category = categoryMatch ? categoryMatch[0].split("=")[1].trim().split("\"")[1].split("\"")[0] : "未分類"

    return {
      id: id,
      date: date,
      title: title,
      content: "",
      thumbnail: thumbnail,
      category: category
    }
  }).reverse()
}

export const BLOG_POSTS: BlogPost[] = blogPosts();
