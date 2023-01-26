import React from 'react'
import './Footer.css'
import Jadsonbgremoved2 from '../../assets/Jadsonbgremoved22.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <section>
      <footer>
        <div className='par'>
          <div className='paf'>
            <div className='part'>
              <div className='part-image'>
                <img src={Jadsonbgremoved2} alt='Jadsonbgremoved' />
                {/* <p>
                  Jadson <b /> Integrated Farms & Services{' '}
                </p> */}
              </div>
              <h1 className='reduce'>
                JADSON INTEGRATED FARMS & SERVICES LTD.
              </h1>
            </div>
            <div className='part'>
              <h1>LINKS</h1>
              <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='/service'>
                  <li>Services</li>
                </Link>
                <Link to='/about'>
                  <li>About Us</li>
                </Link>
                <Link to='/contact'>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className='part'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contac-us'>Contact us</button>
              </HashLink>

              <div className='socials'>
                <div className='icon'>
                  <i className='fa-brands fa-facebook-f'></i>
                </div>
                <div className='icon'>
                  <i className='fab fa-twitter'></i>
                </div>
                <div className='icon'>
                  <i className='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='par1'>
          <div className='paf1'>
            <div className='pad'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contac-us'>Contact us</button>
              </HashLink>
              <div className='socials'>
                <div className='icon'>
                  <i className='fa-brands fa-facebook-f'></i>
                </div>
                <div className='icon'>
                  <i className='fab fa-twitter'></i>
                </div>
                <div className='icon'>
                  <i className='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='technology'>
          <div className='pak'>
            <p style={{ paddingBottom: '0px' }}>
              Copyright &copy; <span style={{ color: '#fff' }}>{date}</span> ||
              All rights reserved
            </p>
            <p>Developed by FireSwitch Technologies</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
