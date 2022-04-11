class MyController
    def initialize(req, res)
        @req = req
        @res = res
    end

    def render_content(content, content_type='text/html')
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end

    def redirect_to(url)
        @res.status = 302
        @res["Location"] = url
    end

    def execute
        if @req.path == '/dogs'
            render_content 'Hello dogs!'
        elsif @req.path == '/sloths'
            redirect_to '/dogs'
        else
            @res.status = 404
            render_content '404 Not Found'
        end
    end
end