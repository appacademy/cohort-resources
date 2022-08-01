class MyController
  def initialize(req, res)
    @req = req
    @res = res
  end

  def redirect_to(url)
    @res.status = 302
    @res['Location'] = url
  end

  def render_content(content, content_type = 'text/html')
    @res.write(content)
    @res['Content-Type'] = content_type
    nil
  end

  def execute
    case @req.path
    when '/cats'
      redirect_to '/dogs'
    when '/dogs'
      render_content 'hello dogs'
    else
      render_content 'nothing to see here'
    end
  end
end