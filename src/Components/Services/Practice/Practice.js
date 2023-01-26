import React from 'react'
import './Practice.css'
import smallsmile from '../../../assets/smallsmile.png'
import { HashLink } from 'react-router-hash-link'

const Practice = () => {
  return (
    <section className='about-us' id='practice'>
      <div className='pad'>
        <div className='animal-manure'>
          <div className='animal-manure-image'>
            <img src={smallsmile} alt='' />
          </div>
          <div className='animal-manure-text'>
            <h1>Best-practice Animal Manure Processing</h1>
            <p>
              Farmyard waste can be processed and recycled to the farm as an
              addition. This is one of the service we do best.
            </p>
          </div>
        </div>
        <div className='midp'>
          <HashLink
            to={'/contact/#cop'}
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <button className='contactp midp'>Contact Us</button>
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default Practice
