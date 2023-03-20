require 'rack'

Rack::Server.start({
  app: Proc.new {},
  Port: 3000
})