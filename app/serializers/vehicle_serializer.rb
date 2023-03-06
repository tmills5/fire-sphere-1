class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :designation, :year, :make, :model, :vin, :station_id

  belongs_to :station

  has_many :users
end
