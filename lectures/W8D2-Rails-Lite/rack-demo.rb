require "rack"
require "byebug"

most_basic_app = Proc.new do 
    ["200", {"Content-Type" => "text/html"}, ["This is the most basic rack app. Oh my gosh"]]
end

less_basic_app = Proc.new do |env|
    # p env
    res = Rack::Response.new
    res.write("Happy Tuesday. May the Fourth be with you.")
    res.finish
end

# class MyController
#     def execute(req, res)
#         if req.path == '/cats'
#             res.write('Hello Cats') #puts things into the body of the response
#         elsif req.path == '/dogs'
#             res.status = 302 # information in the response
#             res.location = '/cats' #forces a redirect to this path
#         elsif req.path == '/html'
#             res.write('<h1>HTML was a just a string after all </h1>')
#         else
#             res.write('banana')
#         end
#     end
# end

class MyBetterController
    def initialize(req, res)
        @req = req
        @res = res
    end

    def redirect_to(url)
        @res.status = 302
        @res["Location"] = url
        nil
    end

    def render_content(content, content_type = 'text/html')
        @res.write(content)
        @res["Content-Type"] = content_type
        nil
    end

     def execute
        if @req.path == '/cats'
            render_content('Hello Cats') 
        elsif @req.path == '/dogs'
            redirect_to('/cats')
        elsif @req.path == '/html'
            render_content '<h1>HTML was a just a string after all </h1>'
        else
            @res.status = 404
            render_content 'Not found, Silly'
        end
    end
    
end

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # MyController.new.execute(req, res)
    MyBetterController.new(req, res).execute
    res.finish # packages up the response in the array and sends it back to the client
end

Rack::Server.start({
    app: app,
    Port: 3000 # I love you, 3000
})
