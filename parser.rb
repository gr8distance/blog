require 'oga'
require 'pry'
require 'fileutils'

file =File.read("blog.xml")
xml = Oga.parse_xml(file)
entries = xml.css('entry')
hash = entries.map do |entry|
  children = entry.children
  published = children.find { |child| child.name == "published" }.text
  title = children.find { |child| child.name == "title" }.text
  content = children.find { |child| child.name == "content" }.text
  { published:, title:, content: }
end
contents = hash.slice(52, 999)
contents.each do |content|
  year, month, date = content[:published].split("T")[0].split("-")
  dir_path = "src/pages/articles/#{year}/#{month}/#{date}"
  FileUtils.mkdir_p(dir_path)
  filename = "#{dir_path}/#{content[:title]}.astro"
  File.open(filename, "w") do |file|
    file.puts("---")
    file.puts("import Layout from \"../../../../../layouts/ArticleLayout.astro\"\;")
    file.puts("const title = \"#{content[:title]}\"")
    file.puts("const description = \"\"")
    file.puts("const thumbnail = \"\"")
    file.puts("const labels = []")
    file.puts("---")
    file.puts("<Layout title={title} labels={labels}>")
    file.puts("<article>")
    file.puts(content[:content])
    file.puts("</article>")
    file.puts("</Layout>")
  end
end