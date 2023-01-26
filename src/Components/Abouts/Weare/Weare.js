import React from 'react'
import './Weare.css'
import home from '../../../assets/home.png'

const Weare = () => {
  return (
    <section className='about-us'>
      <div className='pad'>
        <div className='do'>
          <h1>Who We Are</h1>
          <div className='hor-line'></div>
        </div>
        <div className='agro-business'>
          <div className='agro-business-image'>
            <img src={home} alt='dr' />
          </div>
          <div className='agro-business-text'>
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
