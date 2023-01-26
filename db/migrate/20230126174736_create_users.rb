class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :rank
      t.string :shift
      t.integer :vehicle_id
      t.boolean :is_admin
      t.string :home_address

      t.timestamps
    end
  end
end
