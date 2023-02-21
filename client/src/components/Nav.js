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
        <li><a href='/'>Home</a></li>
        {user ? <a href="/users/:id" ><p style={{"color": "red"}}>{user.username}</p></a> : null}
        <li className="button"><a href='/login'>Login</a></li>
        <li><a href='/logout' onClick={handleLogout}>Logout</a></li>
      </ul>
    </nav>
  );
}

export default Nav;