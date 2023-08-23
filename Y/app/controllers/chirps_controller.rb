# chirps_url -> "http://localhost:3000/chirps"
# chirp_url(id) -> "http://localhost:3000/chirps/id"

#   Prefix Verb   URI Pattern           Controller#Action
# chirps GET    /chirps(.:format)     chirps#index
#        POST   /chirps(.:format)     chirps#create
#  chirp GET    /chirps/:id(.:format) chirps#show
#        PATCH  /chirps/:id(.:format) chirps#update
#        PUT    /chirps/:id(.:format) chirps#update
#        DELETE /chirps/:id(.:format) chirps#destroy

class ChirpsController < ApplicationController

  def index
    # controller action routed to from GET /chirps
    chirps = Chirp.all # gets all chirps from the db
    render json: chirps # renders the chirps in the body of the response (as JSON) (JSON is basically a javascript string)
  end
  
  def show
    # show an individual chirp based on id
    chirp = Chirp.find_by(id: params[:id]) # find_by is better UX than find
    if chirp.nil?
      render json: ['no chirp found'], status: 404
    else
      render json: chirp
    end
    
  end

  def create
    chirp = Chirp.new(chirp_params)
    if chirp.save
      # if successful save
      # render json: chirp # will return the json of successfully created chirp
      redirect_to chirp_url(chirp) # this will create a new req res cycle, to the show action
      # create new request to "http://localhost:3000/chirps/1"
    else
      # if validation failed
      render json: chirp.errors.full_messages, status: :unprocessable_entity # or 422
    end
  end
  
  def update
    # debugger
    chirp = Chirp.find_by(id: params[:id])
    if chirp.nil?
      render json: ['no chirp found'], status: 404
    elsif chirp.update(chirp_params) # similar to save, but for updating
      redirect_to chirp_url(chirp)
    else
      render json: chirp.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    chirp = Chirp.find_by(id: params[:id])
    if chirp.nil?
      render json: ['no chirp found'], status: 404
    else
      chirp.destroy # removes chirp from db
      redirect_to chirps_url # goes to chirps index
    end
  end

  # called strong params - it is a rails standard for reading a request body
  def chirp_params
    params.require(:chirp).permit(:body, :user_id)
  end

  
end