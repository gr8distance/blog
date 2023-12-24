require 'pry'
require 'parallel'

class Image
  attr_reader :url, :local, :path
  def initialize(path:, url:)
    @url = url
    @path = path
  end

  def download!
    filename = File.basename(url)
    `wget -P images #{url}`
    @local = "./images/#{filename}"
  end
end

posts_dir = './posts/'
images = Dir.glob("#{posts_dir}/**/*.md").flat_map do |path|
  file = File.read(path)
  https = file
            .scan(/\!\[\]\(https.*.jpg\)\]/)
            .map { |url| url.match(%r{https://.*.jpg}) }
            .map(&:to_s)
  http = file
           .scan(/\(http:\/\/.*.jpg\)/)
            .map { |url| url.match(%r{http://.*.jpg}) }
            .map(&:to_s)
  replaced = [https, http]
               .flatten
               .reduce(file) { |acm , url|
    acm.gsub(url, "/images/#{File.basename(url)}")
  }
  File.open(path, 'w') do |f|
    f.puts replaced
  end
end

Parallel.each(images, in_threads: 32) do |image|
  image.download!
end
