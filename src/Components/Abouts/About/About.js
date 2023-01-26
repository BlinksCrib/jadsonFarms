import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './About.css'

const About = () => {
  return (
    <>
      <section className='agriculture'>
        <div className='all'>
          <div className='all-pad'>
            <div className='desk'>
              <h1>
                When It is
                <span> Agriculture, </span>
                You are at
                <span> the right place</span>{' '}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className='mob'>
        <div className='mob1'>
          <div className='padea'>
            <div className='pad'>
              <h1>
                When It is
                <span> Agriculture, </span>
                You are at
                <span> the right place</span>
              </h1>
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

export default About
