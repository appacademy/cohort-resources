class MyControllerBase
  attr_reader :req, :res

  def initialize(req, res)
    @req = req
    # req.params
    # req.path
    # req.get?
    # req.patch?
    # req.post?
    @res = res
  end

  def execute

  end

  def redirect_to(location)
    res.status = 302
    res['Location'] = location
    res.finish
  end

  def render_content(content_type, content)
    res['Content-Type'] = content_type
    res.write(content)
    res.finish
  end
end