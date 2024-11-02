require 'pry'
require 'fileutils'
require 'parallel'

Dir.glob('src/pages/articles/**/**/**/*.astro') do |path|
  year, month, day, title = path.gsub('.astro', '').split('/').drop(3)
  file = File.read(path)
  formatted = file
                .gsub('>', ">\n")
                .gsub("\n\n", "\n")

  hrefs = formatted
            .split("\n")
            .map { |line| line.match(/src="https:\/\/blogger.googleusercontent.com.*"/) }
            .compact
  images = Dir.glob("public/images/#{year}/#{month}/#{day}/#{title.gsub(' ', '_')}/*").to_a

  body = hrefs.zip(images).reduce(formatted) do |acm, (href, image)|
    if href.nil? || image.nil?
      acm
    else
      acm.gsub(href.to_s.split("\"")[1], "/#{image}")
    end
  end

  File.open(path, 'w+') do |f|
    f.puts body
  end
end
