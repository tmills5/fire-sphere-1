import React from 'react';

const UserProfile = ({ user }) => {
  const { username, email, id } = user;

  return (
    <h1>User Profile `${user.username}`</h1>
  )
};

export default UserProfile;