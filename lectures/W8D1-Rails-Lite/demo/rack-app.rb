require 'rack'
require 'byebug'

most_basic_app = Proc.new do 
    ['200', {'Content-Type' => 'text/html'}, ['This is the most basic Rack app.']]
end

most_basic_redirect_app = Proc.new do 
    ['302', {'Content-Type' => 'text/html', 'Location' => 'https://www.google.com'}, []]
end

less_basic_app = Proc.new do |env|
    p env 
    res = Rack::Response.new
    res.write('Hello World')
    res.finish
end

class MyController 
    # def execute(req, res)
    #     if req.path == '/cats'
    #         res.write('Hello cats!')
    #     elsif req.path == '/dogs'
    #         res.status = 302
    #         res.location = '/cats'
    #     else
    #         res.write('Hello World')
    #     end
    # end

    def  initialize(req, res)
      @req = req
      @res = res
    end

    def redirect_to(url)
        debugger
        @res.status = 302
        @res["Location"] = url
        nil
    end

    def render_content(content, content_type = 'text/html')
        debugger
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end

    def execute
        if @req.path == "/cats"
            debugger
            render_content "Hello cats"
        elsif @req.path == "/dogs"
            debugger
            redirect_to "/cats"
        elsif @req.path == "/html"
            debugger
            render_content "<strong>Html is just a string after all.</strong>"
        else
            debugger
            @res.status = 404
            render_content "404! Page not found"
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
    Port: 1024
})