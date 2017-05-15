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

# Proxies

## Case Studies
data.case_studies.each do |id, case_study|
  proxy "/case-studies/#{ case_study.card.title.parameterize }/index.html", "/case-study.html", :locals => { :case_study => case_study }, :ignore => true
end
