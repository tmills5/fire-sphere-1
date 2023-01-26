class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :designation
      t.integer :year
      t.string :make
      t.string :model
      t.string :vin
      t.integer :station_id

      t.timestamps
    end
  end
end
