import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Consultancy.css'

const Consultancy = () => {
  return (
    <>
      <section className='about-us' style={{ padding: '0.6rem 0px' }}>
        <div className='pad'>
          <div className='consultancy'>
            <div className='pat'>
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
                <button className='contact-us'>Contact us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <section className='consult' style={{ marginBottom: '4rem' }}>
        <div className='consultancy1'>
          <div className='pact'>
            <div className='pad'>
              <h1>We offer Tested and Trusted Farm Consultancy</h1>
              <p>
                At Jadson Farms, we bring innovations to our Consultancy
                Services through tested and trusted services and systems for the
                continual growth of agriculture industry.
              </p>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contact-us1'>Contact us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consultancy
