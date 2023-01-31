class SessionsController < ApplicationController

  def create
    # find the user by username
    user = User.find_by(username: params[:username])
    # authenticate the user
    if user&.authenticate(params[:password])
      session[:current_user] = user.id
      render json: user, status: :ok
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
      # byebug
      puts user
  end

  def destroy
    session.delete :current_user
    head :no_content
  end

  private


end
