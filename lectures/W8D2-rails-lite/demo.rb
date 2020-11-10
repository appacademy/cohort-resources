require 'rack'
require 'byebug'


# most_basic_app = Proc.new do
#   ['200', {'Content-Type' => 'text/html'}, ['This is the most basic rack app.']]
# end

# most_basic_redirect_app = Proc.new do
#   [
#     '302',
#     {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'},
#     []
#   ]
# end

# Rack::Server.start({
#   app: most_basic_redirect_app,
#   Port: 3000
# })

# less_basic_app = Proc.new do |env|
#     p env
#     res = Rack::Response.new
#     res.write("Hello world!")
#     res.finish
# end

# Rack::Server.start(
#   app: less_basic_app,
#   Port: 3000
# )


# cookie_party_app = Proc.new do |env|
#   req = Rack::Request.new(env)
#   res = Rack::Response.new
#   res.write("<h1>COOKIE PARTY</h1>")
#   if req.cookies["cookie_party_2"]
#     res.write("<h2>We have cookies for our party!</h2>")
#   else
#     res.write("<h2>Aw, there's no cookies! Refresh to make some.</h2>")
#   end
#   res.set_cookie("cookie_party_2", { value: true })
#   res.finish
# end

# Rack::Server.start(
#   app: cookie_party_app,
#   Port: 3000
# )


# class MyController
#   def execute(req, res)
#     if req.path == "/cats"
#       res.write("Hello cats!")
#       elsif req.path == "/dogs"
#       res.status = 302
#       res.location = "/cats"
#     else
#       res.write("Hello world!")
#     end
#   end
# end

# app = Proc.new do |env|
#   req = Rack::Request.new(env)
#   res = Rack::Response.new
#   MyController.new.execute(req, res)
#   res.finish
# end

# Rack::Server.start({
#   app: app,
#   Port: 3000
# })


# class MyController
#   def initialize(req, res)
#     @req = req
#     @res = res
#   end

#   def redirect_to(url)
#     @res.status = 302
#     @res["Location"] = url
#     nil
#   end

#   def render_content(content, content_type = "text/html")
#     @res.write(content)
#     @res['Content-Type'] = content_type
#     nil
#   end

#   def execute
#     if @req.path == "/cats"
#         render_content "Hello cats!"
#     elsif @req.path == "/dogs"
#         redirect_to "/cats"
#     elsif @req.path == "/html"
#         render_content "<strong>Hello html!</strong>"
#     else
#         @res.status = '404'
#         render_content "404! Not Found"
#     end
#   end
# end

# app = Proc.new do |env|
#   req = Rack::Request.new(env)
#   res = Rack::Response.new
#   MyController.new(req, res).execute
#   res.finish
# end

# Rack::Server.start({
#   app: app,
#   Port: 3000
# })

class MyController
  def initialize(req, res)
    @req = req
    @res = res
  end
  
  def redirect_to(url)
    @res.status = 302
    @res["Location"] = url
    nil
  end

  def render_content(content, content_type = "text/html")
    @res.write(content)
    @res['Content-Type'] = content_type
    nil
  end

  def render(template_name)
    dir_path = File.dirname(__FILE__)
    template_path = File.join(
      dir_path, "views", "#{template_name}.html.erb"
    )

    template_code = File.read(template_path)

    render_content(
      ERB.new(template_code).result(binding),
      "text/html"
    )
  end

  def execute
    if @req.path == "/cats"
      render_content "Hello cats!"
    elsif @req.path == "/dogs"
      redirect_to "/cats"
    elsif @req.path == "/html"
      render_content "<strong>Hello html!</strong>"
    else
      @times = (1..15)
      render :example
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
