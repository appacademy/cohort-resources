gem 'rack', '~> 2.2.4'
require 'rack'
require 'byebug'

most_basic_app = Proc.new do
  ['200', {'Content-Type' => 'text/html'}, ['This is the most basic rack app.']]
end

most_basic_redirect_app = Proc.new do
  ['302', {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'}, [] ]
end

less_basic_app = Proc.new do |env|
  p env
  res = Rack::Response.new
  res.write("hello")
  res.finish # => ['200', {...default_headers}, ['hello']]
end


class MyController

  def initialize(req, res)
    @req = req
    @res = res
  end

  def redirect_to(url)
    @res.status = 302
    @res["Location"] = url
  end

  def render_content(content, content_type = "text/html")
    @res.write(content)
    @res['Content-Type'] = content_type
    nil
  end
  
  def execute
    if @req.path == '/cats'
      render_content "hi cats!"
    elsif @req.path == '/dogs'
      redirect_to "/cats"
    elsif @req.path == "/html"
      render_content "<h1>HTML is just a string</h1>"
    else
      render_content "welcome to just whatever yeah"
    end
  end
end

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).execute
  res.finish
end


Rack::Server.start({
  app: app,
  Port: 3000
})