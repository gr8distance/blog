require 'pry'
require 'json'
require 'fileutils'

Dir.glob('articles/**/*.md').each do |path|
  file = File.read(path)
  meta_header, _ = file.split('---')
  meta_hash = eval(meta_header.sub('%', '').gsub('~w', '%w'))

  _, year, title = path.split('/')
  FileUtils.mkdir_p("meta/#{year}")
  File.open("meta/#{year}/#{title}.json", 'w') do |f|
    f.puts(meta_hash.to_json)
  end
end
