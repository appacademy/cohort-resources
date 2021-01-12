require "rack" 
#basic rack app 

# basic_app = Proc.new do 
#   ['200', { 'Content-Type'=> 'text/html' }, ['spaghetti western']]
# end

#rack response and finish demo 
# less_basic_app = Proc.new do |env| #environment variable 
#   p env
#   res = Rack::Response.new 
#   res.write('naptime')
#   res.finish #returns something like line 5(status code, content type, body)
# end

#class 
# class MyController 
#   def execute(req, res)
#     if req.path == '/cats'
#       res.write('cats are the best!!!!!')
#     elsif req.path == '/dogs'
#       res.status = 302 
#       res.location = '/cats'
#     else  
#       res.write("mom's spaghetti")
#     end
#   end
# end

# controlled_app = Proc.new do |env|
#   req = Rack::Request.new(env)
#   res = Rack::Response.new 
#   MyController.new.execute(req, res)
#   res.finish #final step 
# end

class MyController #base controller class 

  def initialize(req, res)
    @req = req 
    @res = res 
  end

  def redirect_to(url)
    @res.status = 302 
    @res["Location"] = url 
    return nil 
  end

  def render_content(content, content_type = 'text/html')
    @res.write(content)
    @res['Content-Type'] = content_type 
    return nil 
  end

  def execute
    if @req.path == '/cats'
      # res.write('cats are the best!!!!!')
      render_content 'Cats are the best!!'
    elsif @req.path == '/dogs'
      # res.status = 302 
      # res.location = '/cats'
      redirect_to '/cats' #ive seen this beforeeeee
    else  
      # res.write("mom's spaghetti")
      @res.status = "404" 
      render_content 'I dunno. No one here. BYE'
    end
  end

  
end

controlled_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new 
  MyController.new(req, res).execute
  res.finish #final step 
end

Rack::Server.start({
  app: controlled_app, #variable name
  Port: 3000
})

