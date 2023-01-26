class Vehicle < ApplicationRecord
  belongs_to :station

  has_many :users
end
