class UsersController < ApplicationController

  def index
    render json: User.all.order(:id)
  end

  def new

  end

  def create

  end

  def show
    # using session to find user in question. sessions are in user browser
    # if session for user currently happening. set our user to that user and render json
    current_user = User.find_by(id: session[:current_user])
    render json: current_user
    # byebug
  end

  def update

  end

  def destroy 
    current_user = User.find_by!(id: session[:current_user])
    if current_user
      current_user.destroy
      head :no_content
    else
      render json: {error: "User Not Found"}, status: :not_found
    end
  end



  private


end
