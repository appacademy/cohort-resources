require "rack"
require "byebug"
require "erb"

class MyRackApp
    def self.call(env)
        request = Rack::Request.new(env)
        response = Rack::Response.new
        response.write("Hello World")
        response.finish
    end
end

class MyController 

    def initialize(req,res)
        @req = req
        @res = res
    end

    def redirect_to(url)
        res.status = 302
        # res["Location"] = url
        res.location = url
        nil
    end

    def render_content(content,content_type="text/html")
        res.write(content)
        res["Content-Type"] = content_type
        nil
    end

    def render(template_name)
        dir_path = File.dirname(__FILE__) # gets us the current directory path
        template_path = File.join(
            dir_path,
            "views",
            "#{template_name}.html.erb"
        ) # ~/demo/views/example.html.erb
        template_code = File.read(template_path)
        erb_template_code = ERB.new(template_code)
        render_content(erb_template_code.result(binding),"text/html")
    end

    def execute # (request,response)
        if req.path == "/banana"
            render_content("<h1 style='color: yellow'>Hello banana!</h1>")
        elsif req.path == "/grape"
            redirect_to "/banana"
        elsif req.path == "/html"
            render_content("<strong>Hello Html</strong>")
        else
            @num_times = 7
            # render("example")
            render :example
        end
    end


    private
    attr_reader :req, :res
end

app = Proc.new do |env|
    request = Rack::Request.new(env)
    response = Rack::Response.new
    # response.write("Hello World")
    MyController.new(request,response).execute
    response.finish
end

Rack::Server.start({
    app: app,
    Port: 3000
})