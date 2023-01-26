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
        <div className='parf'>
          <div className='paff'>
            <div className='partf'>
              <div className='part-imagef'>
                <img src={Jadsonbgremoved1} alt='Jadsonbgremoved' />

                {/* <p>
                  Jadson <b /> Integrated Farms & Services{' '}
                </p> */}
              </div>
              <h1 className='reducef'>
                JADSON INTEGRATED FARMS & SERVICES LTD.
              </h1>
            </div>
            <div className='partf'>
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
            <div className='partf'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contac-usf'>Contact Us</button>
              </HashLink>

              <div className='socialsf'>
                <div className='iconf'>
                  <i className='fa-brands fa-facebook-f'></i>
                </div>
                <div className='iconf'>
                  <i className='fab fa-twitter'></i>
                </div>
                <div className='iconf'>
                  <i className='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='par1f'>
          <div className='paf1f'>
            <div className='pad'>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contac-usf'>Contact Us</button>
              </HashLink>
              <div className='socialsf'>
                <div className='iconf'>
                  <i className='fa-brands fa-facebook-f'></i>
                </div>
                <div className='iconf'>
                  <i className='fab fa-twitter'></i>
                </div>
                <div className='iconf'>
                  <i className='fab fa-youtube'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='technologyf'>
          <div className='pakf'>
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
