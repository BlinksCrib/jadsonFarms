import React from 'react'
import './Practice.css'
import smallsmile from '../../../assets/smallsmile.png'




const Practice = () => {
  return (
    <section class='about-us'>
      <div className='pad'>
        <div class='animal-manure'>
          <div
            class='animal-manure-image'
          >
            <img src={smallsmile} alt='' />
          </div>
          <div
            class='animal-manure-text'
          >
            <h1>Best-practice Animal Manure Processing</h1>
            <p>
              Farmyard waste can be processed and recycled to the farm as an
              addition. This is one of the service we do best.
            </p>
          </div>
        </div>
        <div class='midp'>
          <button class='contactp midp'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Practice