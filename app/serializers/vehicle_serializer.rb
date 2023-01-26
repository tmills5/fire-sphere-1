class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :designation, :year, :make, :model, :vin, :station_id
end
