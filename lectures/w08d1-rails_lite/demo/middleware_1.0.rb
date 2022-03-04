require 'rack'

HTTP_RESPONSE = [
    '200',
    {'Content-Type' => 'text/html'}, 
    ['This is the most basic rack app.']
]

class BasicRackAppClass
    def call(env)
        p env
        HTTP_RESPONSE
    end
end

basic_rack_app_PROC = Proc.new do
    HTTP_RESPONSE
end

hash = {
    # app: basic_rack_app_PROC, 
    app: BasicRackAppClass.new, 
    Port: 3000
}

Rack::Server.start(hash)

# p basic_rack_app_PROC.call
# p BasicRackAppClass.new.call