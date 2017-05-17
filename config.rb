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
page '/case-study.html', layout: 'main'

# Proxy

## Case Studies
data.case_studies.each do |id, article|
  proxy "/case-studies/#{ article.title.parameterize }/index.html", "/case-study.html", :locals => { :article => article }, :ignore => true
end
