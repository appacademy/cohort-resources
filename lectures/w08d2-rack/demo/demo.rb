gem 'rack', '~> 2.2.4'
require 'rack'

most_basic_app = Proc.new do
    # just send a response in the required format
    # [status, headers, body]
    ['200', {'Content-Type' => 'text/html'}, ['This is the most basic app ever.']]
end

literally_google_jk_itsaredirect = Proc.new do
    ['302', {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'}, []]
end

less_basic_app = Proc.new do |env|
    p env # looking at the env variable in the server log
    res = Rack::Response.new
    res.write("Hello world!") # change the body of the response
    res.finish # sends response to the server
end

# class MyController

#     def execute(req, res)
#         if req.path == "/cats"
#             res.write("Hello cats!")
#         elsif req.path == "/dogs"
#             res.status = 302
#             res.location = "/cats"
#         elsif req.path == "/html"
#             res.write("<h1>HTML is just a string after all</h1>")
#         else
#             res.write("Hello world!")
#         end
#     end
    
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

    def render(content, content_type = "text/html")
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end

    def execute
        if @req.path == "/cats"
            render "hellooooo cats! *<:)"
        elsif @req.path == "/dogs"
            redirect_to "/cats"
        elsif @req.path == "/html"
            render "<h1>HTML is just a string after all</h1>"
        else
            render "Hello world!"
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
    app: app, # rack is going to use .call on this
    Port: 3000
})
