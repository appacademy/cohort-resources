class SessionsController < ApplicationController


  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:password],
      params[:user][:username]
    )

    if @user
      sign_in!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = ['Invalid username or password']
      render :new
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
