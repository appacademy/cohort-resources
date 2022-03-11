class StaticPagesController < ApplicationController
    def root
        render :root # this line is optional, as it will default to this
        # this loads the root.html.erb
    end
end
