gem 'rack', '~> 2.2.4'
require 'rack'
require 'byebug'

# most_basic_app = Proc.new do
#     ['200', {'Content-type' => 'text/html'} , ['Basic most basic, basic app'] ]
# end

# Rack::Server.start({
#     app: most_basic_app,
#     Port: 3000
# })

# most_basic_redirect_app = Proc.new do
#     ['302', {'Content-type' => 'text/html', 'Location' => 'https://www.google.com'} , [] ]
# end

# Rack::Server.start({
#     app: most_basic_redirect_app,
#     Port: 3000
# })


# less_basic_app = Proc.new do |env|
#     # p env
#     res = Rack::Response.new
#     res.write("<h1>This is the kinda ok app</h1>")
#     res.finish
# end

# Rack::Server.start({
#     app: less_basic_app,
#     Port: 3000
# })


class MyController
    def execute(req, res)
        if req.path == "/cats"
            res.write("This is out cats showpage")
        elsif req.path == "/dogs"
            res.status = 302
            res.location = "/cats"
        else
            res.write("WE DO NOT HAVE THAT PAGE")
        end
    end
end

cool_app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new.execute(req, res)
    res.finish
end


Rack::Server.start({
    app: cool_app,
    Port: 3000
})