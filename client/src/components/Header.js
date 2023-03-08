import React from "react";
import fireLogoBlackLetters from '../assets/fireLogoBlackLetters.png';


const Header = () => {
  // console.log("Home User: ", user)
  return (
    <header>
      <img src={fireLogoBlackLetters} alt="Fire Sphere Logo" />
    </header>
  );
}

export default Header;