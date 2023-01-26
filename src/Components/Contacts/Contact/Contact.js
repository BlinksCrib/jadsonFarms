import React from 'react'
import './Contact.css'
import { HashLink } from 'react-router-hash-link'

const Contact = () => {
  return (
    <>
      <section className='expect'>
        <div className='all'>
          <div className='all-pad'>
            <div className='desk'>
              <h1>We expect to hear from You</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='mob'>
        <div className='mob1'>
          <div className='padec'>
            <div className='pad'>
              <h1>We expect to hear from You</h1>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contact1'>Contact Us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
