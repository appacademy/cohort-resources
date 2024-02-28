class UsersController < ApplicationController



# actions that get HTML these do not do anything to the database!


# get you an HTML Form 
def new 
    @user = User.new
    render :new
end 

# get you an HTML form 
def edit
    @user = User.find(params[:id])
    render :edit
end 





# crud methods/ actions 

# gonna get you back multiple records
def index
    # debugger
    # debugger
    # incoming_username = params[:username]
    @users = User.all
    # render json: @users
    render :index
end 

# gets you back a specific record
def show 
    incoming_id = params[:id]
    @user = User.find_by(id: incoming_id)
    if !@user.nil?
        # render json: @user
        render :show
    else 
        render json: ["user not foud"]
    end 
end 

# will update an already existing record in the Database (db)
def update
    # i have to find who am i updating?????
    incoming_id = params[:id]
    user = User.find_by(id: incoming_id)

    # did i find the user? and was I able to update it?
    if user && user.update(user_params)
        redirect_to user_url(user.id)
    else 
        render json: user.errors.full_messages, status: 422
    end 


end 


# this will remove a specific record from the db
def destroy 
    incoming_id = params[:id]
    user = User.find_by(id: incoming_id)
    user.destroy
    redirect_to users_url


end 


# this will add a record to the db
def create
    # debugger
    # firstname = params[:user][:username]
    # email = params[:user][:email]
    # user = User.new(user_params)
    # this will create an instance but NOT save it to the db
    # if you wanted to save this freshly created instance
    # you then would then have to save it!!
    # user.save
    # this would save it to the db
    # if it is successful it returns true, otherwise false

    # this method does both at once!
    # User.create(user_params)

    user = User.new(user_params)

    # this performs the save for you and return bolean regarding success
    if user.save
        redirect_to user_url(user.id)
    else 
        render json: user.errors.full_messages, status: 422
    end 



end 




private 
def user_params 
    params.require(:user).permit(:username, :email, :age, :coding_pref)
end 






end
