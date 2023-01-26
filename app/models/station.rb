class Station < ApplicationRecord
  has_many :vehicles
  has_many :users, through: :vehicles
end
