require 'rack'

class BasicRackAppClass
    def call(env)
        p "hello world from the CLASS"
        p env
    end
end

basic_rack_app_PROC = Proc.new do |env|
    p "hello world from the PROC"
    p env
end

hash = {
    # app: basic_rack_app_PROC, 
    app: BasicRackAppClass.new, 
    Port: 3000
}

Rack::Server.start(hash)