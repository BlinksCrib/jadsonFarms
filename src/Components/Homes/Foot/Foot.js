import React from 'react'
import { Link } from 'react-router-dom'
import './Foot.css'
import Jadsonbgremoved1 from '../../../assets/Jadsonbgremoved11.png'
import { HashLink } from 'react-router-hash-link'

const Foot = () => {
  const date = new Date().getFullYear()

  return (
    <section>
      <footer className='foot'>
        <div class='parf'>
          <div class='paff'>
            <div class='partf'>
              <div class='part-imagef'>
                <img src={Jadsonbgremoved1} alt='' />

                {/* <p>
                  Jadson <b /> Integrated Farms & Services{' '}
                </p> */}
              </div>
              <h1 className='reducef'>
                JADSON INTEGRATED FARMS & SERVICES LTD.
              </h1>
            </div>
            <div class='partf'>
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
                <HashLink
                  to={'/contact'}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                >
                  <li>Contact Us</li>
                </HashLink>
              </ul>
            </div>
            <div class='partf'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contac-usf'>Contact Us</button>
              </HashLink>

              <div class='socialsf'>
                <div class='iconf'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div class='iconf'>
                  <i class='fab fa-twitter'></i>
                </div>
                <div class='iconf'>
                  <i class='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='par1f'>
          <div class='paf1f'>
            <div class='pad'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contac-usf'>Contact Us</button>
              </HashLink>
              <div class='socialsf'>
                <div class='iconf'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div class='iconf'>
                  <i class='fab fa-twitter'></i>
                </div>
                <div class='iconf'>
                  <i class='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='technologyf'>
          <div class='pakf'>
            <p style={{ paddingBottom: '0px' }}>
              Copyright &copy;{' '}
              <span style={{ color: 'var(--pry-green-color)' }}>{date}</span> ||
              All rights reserved
            </p>
            <p>Developed by FireSwitch Technologies</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Foot
