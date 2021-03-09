# gem install rack

require 'rack'
require 'byebug'

most_basic_app = Proc.new do 
  ['200', {'Content-Type' => 'text/html'}, ['This is the most basic rack app.']]
end

most_basic_redirect_app = Proc.new do
  [
    '302',
    {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'},
    []
  ]
end

less_basic_app = Proc.new do |env|
  # p env
  res = Rack::Response.new
  res.write("Hello World!")
  res.finish
end

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  controller = MyController.new(req, res)
  controller.execute
  res.finish
end

class MyController

  def initialize(req, res)
    @req = req
    @res = res
  end

  def render_content(content, content_type = 'text/html')
    @res.write(content)
    @res['Content-Type'] = content_type
    nil
  end

  def redirect_to(url)
    @res.status = 302
    # @res.location = url
    @res['Location'] = url
  end

  def execute
    if @req.path == '/cats'
      render_content "Hello Cats"
    elsif @req.path == '/dogs'
      redirect_to '/cats'
    elsif @req.path == '/html'
      render_content '<h1>HTML is just a string after all</h1>'
    else
      @res.status = 404
      render_content "404! Not Found"
    end
  end

end

Rack::Server.start({
  app: app, 
  Port: 3000
})