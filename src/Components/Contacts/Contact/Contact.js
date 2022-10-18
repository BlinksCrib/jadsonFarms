import React from 'react'
import './Contact.css'
import contact from '../../../assets/contact.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Contact = () => {
  return (
    <>
      <section class='expect'>
        <div class='all'>
          <div class='all-pad'>
            <div class='desk'>
              <h1>We expect to hear from You</h1>
            </div>
          </div>
        </div>
      </section>

      <section class='mob'>
        <div class='mob1'>
          <div class='padec'>
            <div class='pad'>
              <h1>We expect to hear from You</h1>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
              <button class='contact1'>Contact Us</button>
              </HashLink>
            </div>
          </div>
          {/* <div class='mob-image'>
            <img src={contact} alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Contact
