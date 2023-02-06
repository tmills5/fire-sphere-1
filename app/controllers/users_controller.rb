class UsersController < ApplicationController
  wrap_parameters format: []


  def index
    render json: User.all.order(:id)
  end

  def create
    user = User.create!(user_params)
    if user
      session[:current_user] = user.id
      render json: user.as_json, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
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

  def user_params
    params.permit(:id, :first_name, :last_name, :username, :password, :rank, :shift, :vehicle_id, :is_admin, :home_address)
  end

end
