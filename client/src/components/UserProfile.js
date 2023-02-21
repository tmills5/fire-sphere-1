import React from 'react';

const UserProfile = ({ user }) => {
  const { first_name, last_name, username, rank, shift, is_admin, home_address} = user;
  // const { year } = user.vehicle;
  console.log("UserProfile user: ", user)
  console.log("vehicle: ", user.vehicle.model)

  return (
    <>
      <h1>{username}</h1>
      <p>{last_name}, {first_name}</p>
      <p>{rank} - {shift} shift</p>
      {/* <p>Vehicle: {user.vehicle}</p> */}
      <p>Home Address: {home_address}</p>
    </>
  )
};

export default UserProfile;