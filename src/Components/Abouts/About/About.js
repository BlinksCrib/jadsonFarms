import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
      <section class='agriculture'>
        <div class='all'>
          <div class='all-pad'>
            <div class='desk'>
              <h1>
                When It is
                <span> Agriculture,</span>
                You are at
                <span> the right place</span>{' '}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section class='mob'>
        <div class='mob1'>
          <div class='padea'>
            <div class='pad'>
              <h1>
                When It is
                <span> Agriculture,</span>
                You are at
                <span> the right place</span>
              </h1>
              <Link
                to='/contact'
              >
               <button class='contact1'>Contact Us</button>
              </Link>
            </div>
          </div>
          {/* <div class='mob-image'>
            <img src='./images/Rectangle 82 (1).png' alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default About
