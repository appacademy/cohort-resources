class StaticPagesController < ActionController::Base
  def root
    render file: File.new("#{Rails.root}/public/index.html")
  end
end
