require 'pry'
require 'nokogiri'
require 'mechanize'
require 'fileutils'
require 'parallel'

agent = Mechanize.new

def get(agent, url)
  agent.get(url)
end

def extract_image_links(file)
  Nokogiri::HTML
    .parse(file)
    .css('img')
    .map { |img| img.attributes['src'].value }
end

def download!(agent, url, filepath)
  puts "downloading #{filepath} ... "
  agent.download(url, filepath)
rescue => e
  puts e
end

Dir.glob('src/pages/articles/**/**/**/*.astro') do |path|
  file = File.read(path)
  image_urls = extract_image_links(file)
  Parallel.each_with_index(image_urls) do |url, i|
    year, month, day, title = path.gsub('.astro', '').split('/').drop(3)
    dir = "public/images/#{year}/#{month}/#{day}/#{title}".gsub(' ', '_')
    extname = File.extname(url)

    FileUtils.mkdir_p(dir)
    download!(agent, url, "#{dir}/#{i}#{extname}")
  end
end
