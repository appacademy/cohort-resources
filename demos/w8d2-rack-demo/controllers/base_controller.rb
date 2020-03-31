class BaseController 
    attr_reader :req, :res 

    def initialize(req, res)
        @req = req 
        @res = res 
    end

    def execute
        # some basic routing
        if req.path == "/cats"
            puts "we are rendering /cats"
            # res.write("Hello Cats :)")

            # @cats exists in other instance methods 
            @cats = [
                {name: "Ronil"},
                {name: "Helen"}, 
                {name: "Mike"}, 
                {name: "Michelle"}, 
                {name: "Brittany"}, 
                {name: "Walker :|"}, 
                {name: "Ozzie"}, 
                {name: "Rayzah Blayhde"}
            ]
            # render is another instance method defined in this class
            render :cats 

        elsif req.path == "/dogs"
            puts "we are redirecting to /cats"
            redirect_to "/cats"
        end
    end

    def redirect_to(path)
        # redirect to /cats if you go to /dogs 
        # 302 is a redirect status 
        res.status = 302 
        res.location = path
    end

    # template_name, e.g. :index, :show
    # we need to find the template file - where is it located?
    def render(template_name)
        current_path = File.dirname(__FILE__)

        # File.join() takes in comma separated arguments, 
        # but joins them together in a file path with "/"
        template_path = File.join(current_path, "..", "views", "#{template_name}.html.erb")
        content = File.read(template_path)

        # the variables we create in our controller actions
        # need to be available to be used in our render method 

        # ERB class is a different scope from our BaseController - binding
        # allows us to carry over those variable definitions
        result = ERB.new(content).result(binding)

        # result has already evaluated erb 
        render_content(result, "text/html")
    end

    # helper method that #render will call 
    # 'text/html' is the default argument
    def render_content(content, content_type="text/html")
        res["Content-Type"] = content_type 
        res.write(content)
    end
end