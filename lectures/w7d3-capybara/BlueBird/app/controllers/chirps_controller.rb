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

    # def show
    #     id = params[:id]
    #     @chirp = Chirp.find_by(id: id)
    #     if @chirp 
    #         render json: @chirp
    #     else
    #         render json: "Not found", status: 404
    #     end
    # end

    def new
        render :new
    end

    def create
        @chirp = Chirp.new(chirp_params)
        @chirp.author = current_user
        if @chirp.save
            redirect_to user_chirps_url(@chirp.author)
        else
            render json: @chirp.errors.full_messages, status: 404
        end
    end

    # def update
    #     @chirp = Chirp.find(params[:id])
    #     if @chirp.update(chirp_params)
    #         redirect_to chirp_url(@chirp)
    #     else
    #         render json: @chirp.errors.full_messages, status: 404
    #     end
    # end

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
