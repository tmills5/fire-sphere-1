class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :rank, :shift, :is_admin, :home_address

  belongs_to :vehicle, optional: true
end
