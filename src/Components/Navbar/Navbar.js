import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Jadsonbgremoved1 from '../../assets/Jadsonbgremoved1.png'
import "./Navbar.css"
// import logo from "./logo.jpeg";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

    const [toggleMenu, setToggleMenu] = useState(false)




  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={Jadsonbgremoved1} alt='Jadsonbgremoved' />
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'>
            <a href='#home'>Home</a>
          </li>
          <li className='p__opensans'>
            <a href='#about'>About</a>
          </li>
          <li className='p__opensans'>
            <a href='#menu'>Menu</a>
          </li>
          <li className='p__opensans'>
            <a href='#awards'>Awards</a>
          </li>
          <li className='p__opensans'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='app__navbar-login'>
          <a href='#login' className='p__opensans'>
            Log In / Registration
          </a>
          <div />
          <a href='/' className='p__opensans'>
            Book Table
          </a>
        </div>
        <div className='app__navbar-smallscreen'>
          <i class='fas fa-bars' onClick={() => setToggleMenu(true)}></i>
          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <i class='fas fa-times' onClick={() => setToggleMenu(false)}></i>
              <ul className='app__navbar-smallscreen_links'>
                <li>
                  <a href='#home' onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' onClick={() => setToggleMenu(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#menu' onClick={() => setToggleMenu(false)}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href='#awards' onClick={() => setToggleMenu(false)}>
                    Awards
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => setToggleMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
