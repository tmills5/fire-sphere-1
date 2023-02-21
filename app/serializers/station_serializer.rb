class StationSerializer < ActiveModel::Serializer
  attributes :id, :station_number, :address

  has_many :vehicles
  has_many :users, through: :vehicles
end
