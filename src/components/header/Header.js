import React from 'react'
// import { Link } from "react-router-dom";
import logo from '../header/logo.png'
import './header.css';
function Header() {
  return (
    <div className='header'>
      {/* <Link to="" style={{ textDecoration: 'none' }}> */}
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={logo} alt='Logo' height="40px" />
              <span className='name' > Movie Mania </span>
            </div>
          </div>
        </nav>
      {/* </Link> */}
    </div>
  );
}

export default Header