require 'rack'
require 'byebug'

class ControllerBase
  attr_reader :req, :res

  def initialize(req, res)
    @req = req
    @res = res
  end

  def render(content, content_type = "text/html")
    res["Content-Type"] = content_type
    res.write(content)
    nil
  end

  def redirect_to(url)
    res["Location"] = url
    res.status = 302
    nil
  end

  def execute
    content_type = 'text/html'

    if req.path == '/cats'
      content = "Here are some cats, 🐈🐈🐈🐈🐈"
      # content_type = "text/html"
    elsif req.path == '/more_content'
      content = "{ key: value }"
      content_type = "text/json"
    elsif req.path == "/no_cats"
      redirect_to('/cats')
      return res.finish
    else
      content = "<marquee>HOWDY YALL</marquee>"
      # content_type = "text/html"
    end

    render(content, content_type)
    res.finish
  end
end

a_slightly_better_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  ControllerBase.new(req, res).execute
end

Rack::Server.start({
  app: a_slightly_better_app,
  Port: 3000
})


most_basic_app = Proc.new do
  # [STATUS CODE, HASH with HEADERS, BODY]
  ["200", { "Content-Type" => "text/html" }, ["<h1>HOWDY YALL</h1>"]]
end

basic_redirect_app = Proc.new do
    [
     "302", 
     { "Content-Type" => "text/html", "Location" => "https://www.google.com" }, 
     []
    ]
end

a_better_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res.write("<marquee>HOWDY YALL</marquee>")
  res["Content-Type"] = "text/html"
  res.finish
end

def my_map(stuff)
  return []
end