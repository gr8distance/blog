import { marked } from 'marked'
import { Meta } from './Meta'
import fs from 'fs'
import path from 'path'

export class Article {
  body: string
  path: string
  name: string
  year: string
  month: string
  date: string
  href: string
  tags: string[]
  meta: Meta

  constructor(filepath: string, year: string) {
    const file = fs.readFileSync(filepath, 'utf-8')
    const name = path.basename(filepath)
    this.body = file.split('---')[1]
    this.path = filepath
    this.name = name.split('-')[2].split('.md')[0]
    this.year = year
    this.month = name.split('-').slice(0, 2).join('-')
    this.date = `${year}-${this.month}`
    this.href = `/articles/${this.year}/${this.month}/${this.name}`
    this.meta = Meta.new(year, this.month, this.name)
    this.tags = this.meta.tags
  }

  encodedName() {
    if (process.env.NODE_ENV == 'development') {
      return encodeURIComponent(this.name)
    } else {
      return this.name
    }
  }

  content() {
    return marked.parse(this.body)
  }

  static new(year: string, month: string, id: string) {
    const yearDirPath = './articles/'
    const path = `${yearDirPath}${year}/${month}-${decodeURIComponent(id)}.md`
    return new Article(path, year)
  }

  static newAll() {
    const yearDirPath = './articles/'
    const years = fs.readdirSync(yearDirPath, { withFileTypes: true })
    return years.map((year) => {
      return fs.readdirSync(`${yearDirPath}${year.name}`, { withFileTypes: true }).map((article) => {
        const path = `${yearDirPath}${year.name}/${article.name}`
        return new Article(path, year.name)
      })
    }).flat().reverse()
  }
}
