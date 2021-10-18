require 'rack'
require 'byebug'

# [status code, headers, content]
first_app = Proc.new do
  ['200', {'Content-Type' => 'text/html'}, ['This is our first app']]
end

redirect_app = Proc.new do
  ['302', {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com/'}, []]
end

less_basic_app = Proc.new do |env|
  request = Rack::Request.new(env)
  response = Rack::Response.new
  response.write('hello world')
  response.finish
end

# server in rack namespace
# Rack::Server.start({
#   app: less_basic_app,
#   Port: 3000
# })

# class MyController
#   def self.call(env)
#     req = Rack::Request.new(env)
#     res = Rack::Response.new

#     # going to check req path
#     if req.path == "/cats"
#       res.write("This is our cats page! >:3")
#     elsif req.path == "/dogs"
#       res.status = 302
#       res.location = "/cats"
#     elsif req.path == "/html"
#       res.write("<h1>HTML is just a string</h1>")
#     else
#       res.write("Hello world")
#     end
#     res.finish
#   end
# end

class MyController

  def self.call(env)
    self.new(env).execute
  end

  attr_reader :req, :res

  def initialize(env)
    @req = Rack::Request.new(env)
    @res = Rack::Response.new
  end

  def render_content(content)
    res.write(content)
    debugger
    # res['Content-Type'] = "text/html"
    nil
  end

  def execute
    # going to check req path
    if req.path == "/cats"
      render_content("This is our cats page! >:3")
    elsif req.path == "/dogs"
      res.status = 302
      res.location = "/cats"
    elsif req.path == "/html"
      render_content("<h1>HTML is just a string</h1>")
    else
      res.status = 404
      render_content "<h1>Uh Oh! Page Not Found D:</h1>" # ruby lets us do this
    end
    res.finish
  end
end

Rack::Server.start({
  app: MyController, # will perform a .call on whatever is passed in
  Port: 3000
})

