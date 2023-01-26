class StationsController < ApplicationController
  # consider refactoring by placing not_found etc in private methods
  
    def index
      render json: Station.all.order(:station_number)
    end
  
    def new
  
    end
  
    def create
  
    end
  
    def show
      station = find_station_by_id
      if station.present?
        render json: station
      else
        render json: {error: "Station not found"}, status: :not_found
      end
    end
  
    def update
  
    end
  
    def destroy 
      station = find_stations
      if station.present?
        station.destroy
        head :no_content
      else
        render json: {error: "Station not found"}, status: :not_found
      end
    end
  
  
  
  
    private
  
    def find_station_by_id
      Station.find(params[:id])
    end
  
    def station_params
      params.permit
    end
  
  end
  