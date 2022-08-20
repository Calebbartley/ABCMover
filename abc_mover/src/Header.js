import React from 'react'
import logo from '../src/assets/logo.png';
import './Header.css'


const Header = () => {
  return (
    <div className='headerContainer'  >
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
      <div className='searchbar'  >
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header