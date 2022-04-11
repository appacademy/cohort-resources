# I've already run `gem install rack`
require 'rack'
# require_relative './app.rb'
require 'byebug'
require_relative './my_controller.rb'

most_basic_app = Proc.new do
    [
        '200',
        {'Content-Type' => 'text/html'},
        ['This is the most basic rack app.']
    ]
end

slightly_more_complex_app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # res.write("hello world!")
    MyController.new(req, res).execute
    res.finish
end

# single argument is a hash with two required keys
# app is an object that responds to .call
Rack::Server.start({
    app: slightly_more_complex_app,
    Port: 3000
})