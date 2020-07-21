require 'rack'

# class MyRackApp
#   def self.call(env)
#     req = Rack::Request.new(env)
#     res = Rack::Response.new
#     res.write("Welcome to my Rack app wooo")
#     res.finish
#   end
# end

# class MyController
#   def execute(req, res)
#     if req.path == "/cats"
#       res.write("Welcome to the cats page!!")
#     elsif req.path == "/dogs"
#       res.status = 302
#       res.location = "/cats"
#     else
#       res.write("Welcome to the not cats page!!!")
#     end
#   end
# end

class MyController
  def initialize(req, res)
    @req = req
    @res = res
  end

  def redirect_to(url)
    @res.status = 302
    @res.location = url
    nil
  end

  def render_content(content, content_type = "text/html")
    @res.write(content)
    @res['Content-Type'] = content_type
    nil
  end

  def execute
    if @req.path == "/cats"
      render_content("Welcome to the cats page!!")
    elsif @req.path == "/dogs"
      redirect_to "/cats"
    elsif @req.path == "/html"
      render_content "<strong>Welcome to the html page!</strong>"
    else
      render_content "Welcome to the whatever page"
    end
  end
end

rack_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).execute
  res.finish
end

Rack::Server.start({
  app: rack_app, # Rack will do rack_app.call on the proc
  Port: 3000
})


