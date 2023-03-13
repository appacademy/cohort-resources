class ChirpsController < ApplicationController
before_action :require_logged_in, only: [:create]

# controller actions are just methods

    def index 
        #  free to use active record and associations 
        # debugger
        # query =params[:query]
      chirps = Chirp.all
      render json: chirps

    end 

    def create
        debugger
        chirp = Chirp.new(chirp_params)
        chirp.user_id = User.first.id
        if chirp.save
            # need to include wildcard with redirect if it needs it
            redirect_to chirp_url(chirp.id)
        else 
            render json: chirp.errors.full_messages, status: 422 # unprocessable entity 
        end 
        
    end 

    def update
        debugger
        # incoming_wildcard = params[:id]
        chirp = Chirp.find_by(id: params[:id]) #nil
        # find_by will return nil
        
        if chirp && chirp.update(chirp_params)
            redirect_to chirp_url(chirp.id)
        else 
            render json: chirp.errors.full_messages, status: 422 #:unprocessable_entity
        end 


    end 

    def destroy
        # first I must find the chirp to be deleted
        incoming_wildcard = params[:id]
        chirp = Chirp.find(incoming_wildcard)
        chirp.destroy
        redirect_to chirps_url
        # we can redirect 
        # when we redirect we create an additional request




    end 

    def show
        # debugger
        incoming_wildcard = params[:id]
        chirp = Chirp.find(incoming_wildcard)
        if chirp
            render json: chirp
        else 
            render json: ['not found'], status: 404
        end
        

    end 



    private 
    # these are strong params

    def chirp_params 
        params.require(:chirp).permit(:body)
    end 

    # def search 
    #     puts "hihihihihi"
    # end 
end 