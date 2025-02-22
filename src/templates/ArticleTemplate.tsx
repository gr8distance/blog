"use client"

import { useState } from "react"
import { Bike } from "lucide-react"
import ProfilePane from "@/components/ProfilePane"
import ImageModal from "@/components/ImageModal"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { PopularArticles } from "@/components/PopularArticles"
import { ArticleBanner } from "@/components/AppBanner"

export interface ArticleData {
  title: string
}

interface ArticleTemplateProps {
  title: string
  children: React.ReactNode
  thumbnail: string
  date: string
  category: string
}

export function ArticleTemplate({ title, children, thumbnail, date, category }: ArticleTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <Breadcrumbs items={[{ label: title, href: "#" }]} />
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <article className="w-full lg:w-3/4 bg-white rounded-lg shadow-md overflow-hidden">
            <ArticleBanner title={title} date={date} category={category} thumbnail={thumbnail} />
            <div className="p-6">
              {children}
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
        <ImageModal
          src={selectedImage}
          alt="拡大画像"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}
