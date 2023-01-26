class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :rank, :shift, :vehicle_id, :is_admin, :home_address
end
