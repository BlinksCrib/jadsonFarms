import React from 'react'
import './Weare.css'
import home from '../../../assets/home.png'


const Weare = () => {
  return (
    <section class='about-us'>
      <div class='pad'>
        <div class='do'>
          <h1
          >
            Who We Are
          </h1>
          <div
            class='hor-line'
          ></div>
        </div>
        <div class='agro-business'>
          <div
            class='agro-business-image'
          >
            <img src={home} alt='dr' />
          </div>
          <div
            class='agro-business-text'
          >
            <h1>Agro-Business</h1>
            <p>
              Our major business is Agriculture, food production as well as Farm
              support and/or consultancy Services that will meet the
              expectations of our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weare
