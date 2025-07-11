# _plugins/lunr_index.rb
require 'json'

module Jekyll
  class LunrIndexer < Generator
    safe true
    priority :lowest

    def generate(site)
      index = []

      site.posts.docs.each do |post|
        index << {
          "title"   => post.data['title'],
          "url"     => post.url,
          "content" => post.content.gsub(/<[^>]*>/, ' ')
        }
      end

      site.pages.each do |page|
        next unless page.data['search']
        index << {
          "title"   => page.data['title'],
          "url"     => page.url,
          "content" => page.content.gsub(/<[^>]*>/, ' ')
        }
      end

      File.open(File.join(site.dest, 'search.json'), 'w') do |f|
        f.write(JSON.pretty_generate(index))
      end
    end
  end
end
