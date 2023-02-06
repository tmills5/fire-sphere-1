class VehiclesController < ApplicationController

  def index
    render json: Vehicle.all
  end


  def new

  end

  def create

  end

  def show
    vehicle = find_vehicle_by_id
    if vehicle
      render json: vehicle
    else
      render json: {error: "Vehicle not found"}, status: :not_found
    end
    render json: vehicle
  end

  def update

  end

  def destroy 
    vehicle = find_vehicle_by_id
    if vehicle.present?
      vehicle.destroy
    else
      render json: {error: "Vehicle not Found"}, status: :not_found
    end
  end

  private

  def find_vehicle_by_id
    Vehicle.find(params[:id])
  end

end

  # ensures that a vehicle can only be assigned one station at a time

  # def create
  #   @vehicle = Vehicle.find(params[:vehicle_id])
  #     if @vehicle.vehicle_station_assignment.present?
  #       flash[:error] = "This vehicle is already assigned to a station"
  #       redirect_to vehicles_path
  #     else
  #   @vehicle_station_assignment = @vehicle.build_vehicle_station_assignment(vehicle_station_params)
  #     if @vehicle_station_assignment.save
  #       flash[:notice] = "Vehicle successfully assigned to station"
  #       redirect_to vehicles_path
  #   else
  #     render :new
  #   end
  #   end
  # end

# vehicle must have driver, officer, 2 ff before saving

# def create
#   @vehicle = Vehicle.new(vehicle_params)
#   if @vehicle.employee_role_assignments.select{|a| a.role == 'driver'}.count != 1
#     flash[:error] = "A vehicle must have 1 driver"
#     redirect_to vehicles_path
#   elsif @vehicle.employee_role_assignments.select{|a| a.role == 'officer'}.count != 1
#     flash[:error] = "A vehicle must have 1 officer"
#     redirect_to vehicles_path
#   elsif @vehicle.employee_role_assignments.select{|a| a.role == 'firefighter'}.count != 2
#     flash[:error] = "A vehicle must have 2 firefighters"
#     redirect_to vehicles_path
#   else
#     if @vehicle.save
#       flash[:notice] = "Vehicle successfully created"
#       redirect_to vehicles_path
#     else
#       render :new
#     end
#   end
# end