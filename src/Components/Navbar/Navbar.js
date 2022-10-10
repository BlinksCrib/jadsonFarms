import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Jadsonbgremoved1 from '../../assets/Jadsonbgremoved1.png';
import "./Navbar.css"
// import logo from "./logo.jpeg";
const Navbar = () => {
  const navRef = useRef(null);
 const [toggle, setToggle] = useState(false);

 let activeStyle = {
   padding: '0px 0px 3px 0px',
   textDecoration: '2px solid underline',
   transition: '1s ease-in-out',
   fontWeight: '900 !important',
 }
 let activeStyles = {
   padding: '10px 40px',
   backgroundColor: "var(--pry-green-color)",
   color: "#fff",
   borderRadius: "5px",
   transition: '1s ease-in-out',
   margin: "0 40px",
   fontWeight: '900 !important',
 }
 const [isActive, setActive] = useState('false')

 const handleToggle = () => {
   setActive(!isActive)
 }


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
                <NavLink
                  className='nav-link'
                  to='/'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/service'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/about'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/contact'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id='mySidebar' className='sidebar' ref={navRef}>
        <NavLink
          to='/'
          onClick={closeNav}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Home
        </NavLink>{' '}
        <br />
        <NavLink
          to='/service'
          onClick={closeNav}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Services
        </NavLink>{' '}
        <br />
        <NavLink
          to='/about'
          onClick={closeNav}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          About us
        </NavLink>{' '}
        <br />
        <NavLink to='/contact' onClick={closeNav} style={({ isActive }) => (isActive ? activeStyles : undefined)}>
          Contact us
        </NavLink>{' '}
        <br />
      </div>
    </div>
  )
}

export default Navbar
