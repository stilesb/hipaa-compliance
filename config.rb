require './lib/redcarpet_header_fix'

set :css_dir, 'assets/css/'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, :disable_indented_code_blocks => true, :prettify => true, :tables => true, :with_toc_data => true, :no_intra_emphasis => true

activate :syntax, :line_numbers => true

activate :relative_assets
set :relative_links, true

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method   = :sftp
  deploy.host     = 'wiki.catalyze.io'
  deploy.port     = 22
  deploy.path     = '/opt/catalyze_wiki'
  deploy.user     = 'wikiuser'
  deploy.password = 'sku(!8asdf_)1FF'
end