import React, { useState } from 'react';

// User.create(
//   first_name: "#{first_name}",
//   last_name: "#{last_name}",
//   username: "#{username}",
//   password: "123",
//   rank: ranksArray.sample,
//   shift: ['A', 'B', 'C'].sample,
//   vehicle_id: rand(1..5),
//   is_admin: [true, false].sample,
//   home_address: Faker::Address.full_address,
// )
// end
// ! add station and vehicle assignment?
// ! make only visible to admins dashboard?
// ! add picture upload?


const RegistrationForm = ({setUser, user, errors, setErrors}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rank, setRank] = useState("");
  const [shift, setShift] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [homeAddress, setHomeAddress] = useState("");



  const handleRegistrationSubmit = e => {
    e.preventDefault();

      let user = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        rank: rank,
        shift: shift,
        vehicle_id: vehicle,
        is_admin: isAdmin,
        home_address: homeAddress
      }
    
      fetch('/users', {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(user => { console.log("User: ", user) 
        setUser(user)
        if(user.errors) setErrors(Object.entries(user.errors))
      })
      console.log("User Errors: ", user.errors)
      setFirstName('');
      setLastName('');
      setUsername('');
      setPassword('');
      setRank('');
      setShift('');
      setHomeAddress('');
      setErrors([]);
    }

    const ranks = ["Chief", "Deputy Chief", "Battalion Chief", "Captain", "Lieutenant", "Sergeant", "Corporal", "Firefighter"];
    const shifts = ["A", "B", "C"];
    const vehicles = ["Engine", "Ladder", "Rescue", "Squad", "Brush", "Utility", "Command"];

  return (
    <>
      <form className="login-form" onSubmit={handleRegistrationSubmit}>
        <label>First Name</label>
          <input 
            type="text" 
            onChange={e => setFirstName(e.target.value)} 
            value={firstName} 
            placeholder="First Name" 
            required 
          />
        <label>Last Name</label>
          <input 
            type="text" 
            onChange={e => setLastName(e.target.value)} 
            value={lastName}
            placeholder="Last Name" 
            required 
          />
        <label>Username</label>
          <input 
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            required
          />
        <label>Password</label>
          <input 
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        <label>Rank</label>
          <select value={rank} onChange={e => setRank(e.target.value)}
            >
              {ranks.map(rank => 
                <option key={rank} value={rank}>{rank}</option>)
              }
          </select>
        <label>Shift</label>
          <select value={shift} onChange={e => setShift(e.target.value)}
            >
            {shifts.map(shift =>
              <option key={shift} value={shift}>{shift}</option>)
              }
          </select>
        <label>Vehicle</label>
          <select value={vehicle} onChange={e => setVehicle(e.target.value)}
            >
            {vehicles.map(vehicle =>
              <option key={vehicle.id} value={vehicle}>{vehicle}</option>)
              }
          </select>
        <label>Admin</label>
          <input type={"checkbox"} onChange={e => setIsAdmin(e.target.checked)} value={isAdmin} />
        <label>Home Address</label>
          <input 
            type="text"
            onChange={e => setHomeAddress(e.target.value)}
            value={homeAddress}
            placeholder="Home Address"
            />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegistrationForm;