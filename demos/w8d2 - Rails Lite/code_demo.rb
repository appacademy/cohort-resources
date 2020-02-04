require 'rack'
require 'byebug'
require 'erb'

class MyRackApp

    def self.call(env)
        req = Rack::Request.new(env)
        res = Rack::Response.new
        debugger
        res.write('Hello, World')
        res.finish    
    end

end

class MyController

    def initialize(req, res)
        @req = req 
        @res = res    
        banana = 'yellow banana'
    end

    def redirect_to(url)
        @res.status = 302
        @res.location = url
    end

    def render_content(content, content_type = 'text/html')
        @res.write(content)
        @res['Content-Type'] = content_type
        return nil
    end

    def render(template_name)
        dir_path = File.dirname(__FILE__)
        template_path = File.join(
            dir_path, 'views', "#{template_name}.html.erb"
        )
        template_code = File.read(template_path)
        render_content(
            ERB.new(template_code).result(binding),
            'text/html'
        )
    end

    def execute
        if @req.path == '/cats'
            render_content 'Hello, Cats'
        elsif @req.path == '/dogs'
            redirect_to '/cats'
        elsif @req.path == '/html'
            render_content '<h1>Hello, HTML</h1>'
        else
            render(:example)
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
    Port: 3000
})