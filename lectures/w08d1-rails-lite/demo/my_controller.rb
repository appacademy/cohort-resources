class MyController
    def initialize(req, res)
        @req = req
        @res = res
    end

    def redirect_to(path)
        @res.status = 302
        @res.location = path
        nil
    end

    def render_content(content, content_type = 'text/html')
        @res.write(content)
        @res['Content-Type'] = content_type
        nil
    end

    def execute
        if @req.path == '/cats'
            # res.write('Hello cats!')
            # res.status = 302
            # res.location = '/dogs'
            redirect_to '/dogs'
        elsif @req.path == '/dogs'
            render_content 'Hello dogs!'
        elsif @req.path == '/html'
            render_content '<h1>HTML is just a string after all</h1>'
        else
            # res.write('no such path')
            render_content 'no such path'
        end
    end
end