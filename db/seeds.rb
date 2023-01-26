require 'faker'


# resets the seed data


User.destroy_all
Vehicle.destroy_all
Station.destroy_all


puts "Seeding...🌱"

puts "Seeding STATIONS"

3.times do
  Station.create(
    station_number: [1,2,3].sample,
    address: Faker::Address.full_address
  )
end


puts "Seeding VEHICLES"

  5.times do
    Vehicle.create(
      designation: ["Engine", "Ladder", "Rescue", "Squad", "Brush", "Utility", "Command"].sample,
      year: rand(1990..2021),
      make: "E-ONE",
      model: "some model",
      vin: Faker::Vehicle.vin,
      station_id: rand(1..3)
    )
  end

puts "Seeding EMPLOYEES"
# come back and change passwords
# need to add hire date

10.times do 
  ranksArray = ['Chief', 'Assistant Chief', 'Battalion Chief', 'Captain', 'Lieutenant', 'Sergeant', 'Corporal', 'Firefighter']
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  username = "#{first_name[0,1].capitalize}" + "#{last_name.downcase}"

    User.create(
      first_name: "#{first_name}",
      last_name: "#{last_name}",
      username: "#{username}",
      password: "123",
      rank: ranksArray.sample,
      shift: ['A', 'B', 'C'].sample,
      vehicle_id: rand(1..5),
      is_admin: [true, false].sample,
      home_address: Faker::Address.full_address,
    )
end

puts "DONE...✔️"

