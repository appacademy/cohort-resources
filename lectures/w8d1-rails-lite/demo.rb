require 'rack'
require 'byebug'

# app needs to respond to .call
my_first_app = Proc.new do
  ['200', { 'Content-Type' => 'text/html'}, ["This is my first Rack app."]]
end

my_first_redirect = Proc.new do
  [
    '302',
    { 'Content-Type' => 'text/html', 'Location' => 'https://www.google.com' },
    []
  ]
end

basic_app = Proc.new do |env|
  # p env
  req = Rack::Request.new(env)
  # debugger
  res = Rack::Response.new
  res.write("<h1>Hello world!</h1>")
  res.finish
end

a_better_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyFirstController.new(req, res).execute
  # res.finish
end

class MyFirstController
  def initialize(req, res)
    @req = req
    @res = res
  end

  def render(content, content_type = 'text/html')
    @res.write(content)
    @res["Content-Type"] = content_type
  end

  def redirect_to(other_url)
    @res.status = 302
    @res['Location'] = other_url
  end

  def execute
    if @req.path == '/cats'
      render "Here are some cats, 🐈🐈🐈🐈🐈🐈"
    elsif @req.path == '/dogs'
      redirect_to '/cats'
    elsif @req.path == "/html"
      render "<marquee>This text moves!</marquee>"
    else
      render "Nothing to see here"
    end

    @res.finish
  end
end

Rack::Server.start({
  app: a_better_app,
  Port: 3000
})