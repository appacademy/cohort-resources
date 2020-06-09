require 'rack'

# class MyRackApp
    
#     def self.call(env)
#         req = Rack::Request.new(env)
#         res = Rack::Response.new
#         res.write("Let the sunshine in")
#         res.finish
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

    def render(template_name)
        dir_path = File.dirname(__FILE__)
        template_path = File.join(dir_path, 'views', "#{template_name}.html.erb")
        template_code = File.read(template_path)
        @turtle = 'RAMPAGING TURTLE'
        monkey = "Curious George el mono"
        content = ERB.new(template_code).result(binding)
        render_content(content)
    end

    def redirect_to(url)
        @res.status = 302
        @res['Location'] = url
        nil
    end

    def execute
        if @req.path == '/cats'
            render_content("We Luv Cats")
        elsif @req.path == '/dogs'
            redirect_to '/cats' # redirect_to('/cats)
        elsif @req.path == '/html'
            render_content('<h1>HTML is Great!!!</h1>')
        else
            render :kylo
        end
    end
end


app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # res.write("Let the sunshine in")
    MyController.new(req, res).execute
    res.finish
end


Rack::Server.start({
    # app: MyRackApp,
    app: app,
    Port: 3000
})

