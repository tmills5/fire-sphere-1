import React from 'react';
// import logo from '../assets/images/fireLogoWhiteLetters.png';


const Nav = ({user, setUser}) => {

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(setUser());
  }

console.log("Nav user: ", user)

  return (
    <nav>
      <ul>
        {user ? <a href="/users/:id" ><p style={{"color": "red"}}>{user.username}</p></a> : null}
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Stations</a></li>
        <li><a href='/'>Apparatus</a></li>
        <li><a href='/'>Assignments</a></li>
        <li><a href='/'>Shifts</a></li>
        <li><a href='/'>Announcements</a></li>
        <li><a href='/logout' onClick={handleLogout}>Logout</a></li>

      </ul>
    </nav>
  );
}

export default Nav;