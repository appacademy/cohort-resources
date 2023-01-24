gem 'rack', '~> 2.2.4'
require 'rack'

# [status code, headers hash, body] for a normal response
most_basic_app = Proc.new do
    ['200', {'Content-Type' => 'text/html'}, ['This is the most basic rack app']]
end

most_basic_redirect_app = Proc.new do
    ['302', {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'}, []]
end

less_basic_app = Proc.new do |env|
    p env
    res = Rack::Response.new
    res.write("Hello world!")
    res.finish
end

# class MyController
#     def execute(req, res)
#         if req.path == "/cats"
#             res.write("hello cats!")
#         elsif req.path == "/dogs"
#             res.status = '302'
#             res.location = "/cats"
#         elsif req.path == '/html'
#             res.write("<h1>this is just an h1</h1>")
#         else
#             res.write("hello world!")
#         end
#     end
# end

class MyController

    def initialize(req, res)
        @req = req
        @res = res
    end

    def render_content(content, content_type = "text/html")
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end

    def redirect_to(path)
        @res.status = 302
        @res["Location"] = path
        nil
    end
    
    def execute
        if @req.path == "/cats"
            render_content "hello cats!"
        elsif @req.path == "/dogs"
            redirect_to "/cats"
        elsif @req.path == '/html'
            render_content "<h1>this is just an h1</h1>"
        else
            render_content "hello world!"
        end
    end
end

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new(req, res).execute
    res.finish # ['200', content type header stuff, ["hello cats"]]
end

Rack::Server.start({
    app: app,
    Port: 3000
})