class SessionsController < ApplicationController

  def create
    # find the user by username
    user = User.find_by(username: user_params[:username])
    # authenticate the user
    if user&.authenticate(user_params[:password])
      session[:current_user] = user.id
      render json: user.as_json, status: :ok
      puts "------HIT LOGIN---#{user.username}--"
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
      # byebug
  end

  def destroy
    session.delete :current_user
    head :no_content
  end

  private


end
