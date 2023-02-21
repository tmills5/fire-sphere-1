import React from 'react';

const UserProfile = ({ user }) => {
  const { first_name, last_name, username, rank, shift, vehicle_id, is_admin, home_address } = user;
  console.log("UserProfile user: ", user)


  return (
    <>
      <h1>{username}</h1>
      <p>{last_name}, {first_name}</p>
      <p>{rank} - {shift} shift</p>
      <p>Vehicle: {vehicle_id}</p>
      <p>Home Address: {home_address}</p>
    </>
  )
};

export default UserProfile;