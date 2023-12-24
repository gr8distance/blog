import fs from 'fs'

export class Meta {
  title: string
  author: string
  tags: string[]
  description: string
  keywords: string[]
  headerImage: string

  constructor(filepath: string) {
    const json = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    this.title = json.title
    this.author = json.author
    this.tags = json.tags
    this.description = json.description
    this.keywords = json.keywords
    this.headerImage = json.header_image
  }

  static new(year: string, month: string, id: string) {
    const yearDirPath = './meta/'
    const path = `${yearDirPath}${year}/${month}-${decodeURI(id)}.md.json`
    return new Meta(path)
  }

  static newAll() {
    const yearDirPath = './meta/'
    const years = fs.readdirSync(yearDirPath, { withFileTypes: true })
    return years.map((year) => {
      return fs.readdirSync(`${yearDirPath}${year.name}`, { withFileTypes: true }).map((article) => {
        const path = `${yearDirPath}${year.name}/${article.name}`
        return new Meta(path)
      })
    }).flat().reverse()
  }
}
