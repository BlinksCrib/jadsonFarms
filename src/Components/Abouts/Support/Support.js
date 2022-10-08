import React from 'react'
import './Support.css'
import stand from '../../../assets/stand.png'


const Support = () => {
  return (
    <section class='about-us'>
      <div class='pad'>
        <div class='farm-support'>
          <div
            class='farm-support-image'
          >
            <img src={stand} alt='dr' />
          </div>
          <h1
          >
            Farm Support Services
          </h1>
          <p
          >
            Given the novelty of our ideas and strengths in agro and allied
            industry, Jadson Farms is ranked among the leading companies with
            wealth of experience, affordable and acceptable solution to farming
            business in Nigeria.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Support
