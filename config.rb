# General

## Directory Indexing
activate :directory_indexes

## Browser Prefixing
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

## Layouts
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/index.html', layout: 'main'
page '/about.html', layout: 'main'
