class MyController
  attr_reader :req, :res

  def initialize(req, res)
    @req = req
    @res = res
    # @rendered = false
  end

  def render_content(content, content_type='text/html')
    # throw error if @rendered is true
    res.write(content)
    res['Content-Type'] = content_type
    # @rendered = true
    nil
  end

  def redirect_to(url)
    res.status = 302
    res['Location'] = url
  end

  def execute
    case req.path 
    when '/cats'
      # render_content 'I love cats'
      redirect_to '/dogs'
    when '/dogs'
      redirect_to '/cats'
    when '/ducks'
      render_content 'I love ducks'
    end
  end
end