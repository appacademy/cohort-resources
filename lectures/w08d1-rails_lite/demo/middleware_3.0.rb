require 'rack'

basic_rack_app_PROC = Proc.new do |env|
    p "hello world from the PROC"

    req = Rack::Request.new(env)
    p "==================="
    p "This is the request right here"
    p req
    p "==================="

    res = Rack::Response.new
    res.write("OH MY UNICORNS!!!")
    res.finish    
end

hash = {
    app: basic_rack_app_PROC, 
    Port: 3000
}

Rack::Server.start(hash)