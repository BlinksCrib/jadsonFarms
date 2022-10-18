import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Consultancy.css'


const Consultancy = ({title}) => {
  return (
    <>
      <section class='about-us' style={{ padding: '0.6rem 0px' }}>
        <div class='pad'>
          <div class='consultancy'>
            <div class='pat'>
              <h1>We offer Tested and Trusted Farm Consultancy</h1>
              <p>
                At <span>Jadson Farms</span> , we bring innovations to our
                Consultancy Services through tested and trusted services and
                systems for the continual growth of agriculture industry.
              </p>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contact-us'>Contact us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <section class='consult' style={{ marginBottom: '4rem' }}>
        <div class='consultancy1'>
          <div class='pact'>
            <div class='pad'>
              <h1>We offer Tested and Trusted Farm Consultancy</h1>
              <p>
                At Jadson Farms, we bring innovations to our Consultancy
                Services through tested and trusted services and systems for the
                continual growth of agriculture industry.
              </p>
              <Link to='/contact'>
                <button class='contact-us1'>Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consultancy