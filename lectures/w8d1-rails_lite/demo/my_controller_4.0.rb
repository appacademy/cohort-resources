class MyController

    def execute(req, res)
        if req.path == "/cats"
            res.write("Hello CATS!")
        elsif req.path == "/dogs"
            res.status = 302
            res.location = "/whatwhat"
        elsif req.path == "/html"
            res.write("<h1>HTML? What is that?</h1>")
        else
            res.write("Hello World, for real")
        end
    end

end