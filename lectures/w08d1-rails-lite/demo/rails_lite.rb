require 'rack'
require 'byebug'

require_relative 'MyControllerBase'

simplest_rack_app = Proc.new do |env_hash|
  req = Rack::Request.new(env_hash)
  res = Rack::Response.new
  p "Params: #{req.params}"
  controller = MyControllerBase.new(req, res)
  controller.render_content('text/html', "<h1>#{req.params['animal']}s are the best</h1>")
end

Rack::Server.start({
  app: simplest_rack_app,
  Port: 3000
})