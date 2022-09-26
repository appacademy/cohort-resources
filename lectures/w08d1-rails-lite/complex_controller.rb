class MyController
    def initialize(req, res)
        @req = req
        @res = res
    end

    def redirect_to(url)
        @res.status = 302
        @res["Location"] = url
        nil
    end
  
    def render_content(content, content_type = "text/html")
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end
  
    def execute
        if @req.path == "/cats"
            render_content "Hello cats!"
            # render_content @req.
        elsif @req.path == "/dogs"
            redirect_to "/cats"
        elsif @req.path == "/html"
            render_content "<strong>Hello html!</strong>"
        else
            @res.status = '404'
            render_content "404! Not Found"
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
  