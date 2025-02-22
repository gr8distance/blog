"use client"

import { useState } from "react"
import Image from "next/image"
import { Bike } from "lucide-react"
import ProfilePane from "@/components/ProfilePane"
import ImageModal from "@/components/ImageModal"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { PopularArticles } from "@/components/PopularArticles"

export interface ArticleData {
  title: string
  date: string
  content: string
  content2: string
  thumbnail: string
  category: string
  images: {
    src: string
    alt: string
    caption: string
  }[]
}

interface ArticleTemplateProps {
  article: ArticleData
}

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <Breadcrumbs items={[{ label: article.title, href: "#" }]} />
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <article className="w-full lg:w-3/4 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Article Header with background image */}
            <div className="relative w-full h-[400px] mb-8">
              <Image src={article.thumbnail || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h1 className="text-3xl font-bold mb-4 text-white">{article.title}</h1>
                <div className="flex items-center gap-4 text-white">
                  <time dateTime={article.date}>{article.date}</time>
                  <div className="bg-blue-500 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-sm font-medium">
                    <Bike className="w-4 h-4" />
                    <span>{article.category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-8">
              {/* First part of the content */}
              <div className="prose prose-lg max-w-none mb-8">
                {article.content.split("\n").map((paragraph, index) => {
                  if (paragraph.trim().startsWith("-")) {
                    return (
                      <ul key={index} className="list-disc pl-4">
                        <li>{paragraph.trim().substring(2)}</li>
                      </ul>
                    )
                  }
                  return paragraph.trim() && <p key={index}>{paragraph}</p>
                })}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {article.images.map((image, index) => (
                  <figure key={index} className="space-y-2">
                    <div
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <figcaption className="text-sm text-gray-600 text-center">{image.caption}</figcaption>
                  </figure>
                ))}
              </div>

              {/* Second part of the content */}
              <div className="prose prose-lg max-w-none">
                {article.content2.split("\n").map((paragraph, index) => {
                  if (paragraph.trim().startsWith("-")) {
                    return (
                      <ul key={index} className="list-disc pl-4">
                        <li>{paragraph.trim().substring(2)}</li>
                      </ul>
                    )
                  }
                  return paragraph.trim() && <p key={index}>{paragraph}</p>
                })}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-20 space-y-6">
              <PopularArticles />
              <ProfilePane />
            </div>
          </aside>
        </div>
      </main>

      {selectedImage && (
        <ImageModal src={selectedImage || "/placeholder.svg"} alt="拡大画像" onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}

