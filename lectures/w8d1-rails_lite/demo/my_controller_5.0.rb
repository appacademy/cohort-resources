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
        p "===================="
        p "PARAMS"
        p "PATH: #{@req.path}"
        p "PARAMS: #{@req.params}"
        p "COOKIES: #{@req.cookies}"
        p "===================="

        if @req.path == "/cats"
            render_content("Cats#index VIEW")
        elsif @req.path == "/dogs"
            redirect_to("/cats")
        elsif @req.path == "/html"
            render_content("<h1>HTML? What's that?</h1>")
        elsif
            @res.status = '404'
            render_content("404! Not Found")
        end
    end

end