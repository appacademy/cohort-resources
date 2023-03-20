class MyController
  attr_reader :req, :res

  def initialize(req, res)
    @req = req
    @res = res
  end

  def execute
    if req.path == '/cats'
      # res.write('Hello cats! Meow!')
      redirect_to '/cats'
    elsif req.path == '/dogs'
      res.write('Hello dogs! Woof!')
    else
      res.write('Hello world! Howdy')
    end
  end

  def redirect_to(new_url)
    res.status = 302
    res.location = new_url
  end
end