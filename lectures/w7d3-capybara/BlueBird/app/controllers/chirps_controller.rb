class ChirpsController < ApplicationController
    before_action :require_logged_in

    def index
        if params[:user_id]
            # user = User.find(params[:user_id])
            # chirps = user.chirps
            @chirps = Chirp.where(author_id: params[:user_id]).includes(:author)
        else
            @chirps = Chirp.all.includes(:author)
        end
        render :index
    end

    

      def show 
        @chirp = Chirp.find(params[:id]) 
        render :show
    end 

    def new
        render :new
    end

    def create 
        @chirp = Chirp.new(chirp_params)

        @chirp.author = User.first 
        if @chirp.save 
            redirect_to chirp_url(@chirp)
        else
            flash.now[:errors] = @chirp.errors.full_messages
            render :new
        end 
    end 

    def update 
        @chirp = Chirp.find(params[:id])

        if @chirp.update(chirp_params) 
            redirect_to chirp_url(@chirp)
        else    
            flash[:errors] = @chirp.errors.full_messages
            redirect_to chirp_url(@chirp)
        end 
    end 

    def destroy
        @chirp = Chirp.find(params[:id])
        @chirp.destroy
        redirect_to chirps_url
    end

    private
    def chirp_params
        params.require(:chirp).permit(:body)
    end

end
