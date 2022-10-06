import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Jadsonbgremoved1 from '../../assets/Jadsonbgremoved1.png';
import "./Navbar.css"
// import logo from "./logo.jpeg";
const Navbar = () => {
  const navRef = useRef(null);
 const [toggle, setToggle] = useState(false);


  const openNav = () => {
    setToggle(true)
    // navRef.current.style.width = ${240};
    document.getElementById('mySidebar').style.width= "100%"
  };
  const closeNav = () => {
        setToggle(false)
    document.getElementById('mySidebar').style.width = '0px'
    // navRef.current.style.width = ${0}px;
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container app__navbar-logo'>
          <Link className='navbar-brand' to='/'>
            <img src={Jadsonbgremoved1} alt='Jadsonbgremoved' />
          </Link>
          {toggle ? (
            // href='javascript:void(0)'
            // className='closebtn'
            // onClick={closeNav}
            <i className='fas fa-times nav-btn' onClick={closeNav}></i>
          ) : (
            <i
              className='fas fa-bars nav-btn navbar-toggler'
              onClick={openNav}
            ></i>
          )}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 ml-auto w-100'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/service'>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id='mySidebar' className='sidebar' ref={navRef}>
        <Link to='/' onClick={closeNav}>
          Home
        </Link>{' '}
        <br />
        <Link to='/service' onClick={closeNav}>
         Services
        </Link>{' '}
        <br />
        <Link to='/about' onClick={closeNav}>
          About us
        </Link>{' '}
        <br />
        <Link to='/contact' onClick={closeNav}>
          Contact us
        </Link>{' '}
        <br />
      </div>
    </div>
  )
}

export default Navbar
