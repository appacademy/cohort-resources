class StaticPagesController < ApplicationController
    def root
        render :root # this line is optional, Rails defaults this line
    end
end
