class BaseController
    attr_reader :req, :res 

    def initialize(req, res)
        @req = req
        @res = res 
    end

    def execute
        # debugger 
        if req.path == '/cats'
            @cats = [
                {name: 'Helen'}, 
                {name: 'Ronil'},
                {name: 'Jess'}, 
                {name: 'Jeremy'}, 
                {name: 'Miles'}
            ]
            # render_content('Hello cats!')
            render :cats
        elsif req.path == '/dogs'
            redirect_to('/cats')
        elsif req.params['food']
            render_content("Hello #{req.params['food']}")
        else
            render_content('Hello world!')
        end
    end

    def redirect_to(url)
        res.location = url 
        res.status = 302
    end

    def render_content(content, content_type='text/html')
        res['Content-Type'] = content_type 
        res.write(content)
    end

    def render(template_name)
        # grabbing our current directory
        current_path = File.dirname(__FILE__)

        template_path = File.join(
            current_path, 
            '..', 
            'views', 
            "#{template_name}.html.erb" 
        )

        content = File.read(template_path)
        erb = ERB.new(content)
        render_content(erb.result(binding))
        # local variables lose scope across two different methods 
        # instance variables are available in both execute and render method 
    end
end