import React from 'react';
import "./Footer.css";
import Jadsonbgremoved2 from '../../assets/Jadsonbgremoved22.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section>
      <footer>
        <div class='par'>
          <div class='paf'>
            <div class='part'>
              <div class='part-image'>
                <img src={Jadsonbgremoved2} alt='' />
                {/* <p>
                  Jadson <b /> Integrated Farms & Services{' '}
                </p> */}
              </div>
              <h1 className='reduce'>
                JADSON INTEGRATED FARMS & SERVICES LTD.
              </h1>
            </div>
            <div class='part'>
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
            <div class='part'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contac-us'>Contact us</button>
              </HashLink>

              <div class='socials'>
                <div class='icon'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div class='icon'>
                  <i class='fab fa-twitter'></i>
                </div>
                <div class='icon'>
                  <i class='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='par1'>
          <div class='paf1'>
            <div class='pad'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contac-us'>Contact us</button>
              </HashLink>
              <div class='socials'>
                <div class='icon'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div class='icon'>
                  <i class='fab fa-twitter'></i>
                </div>
                <div class='icon'>
                  <i class='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='technology'>
          <div class='pak'>
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
