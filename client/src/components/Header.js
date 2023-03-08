import React from "react";
import fireLogoBlackLetters from '../assets/fireLogoBlackLetters.png';
import fireLogoWhiteLetters from '../assets/fireLogoWhiteLetters.png';


const Header = () => {
  // console.log("Home User: ", user)
  return (
    <header>
      <img src={fireLogoBlackLetters} className='header-img-full' alt="Fire Sphere Logo" />
      <img src={fireLogoWhiteLetters} className='header-img-mobile' alt="Fire Sphere Logo" />
    </header>
  );
}

export default Header;