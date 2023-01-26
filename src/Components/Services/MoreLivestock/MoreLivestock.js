import React from 'react'
import './MoreLivestock.css'
import servicecow from '../../../assets/servicecow.png'

const MoreLivestock = () => {
  return (
    <section className='about-us' id='livestock'>
      <div className='pad'>
        <div className='do'>
          <h1>What we do</h1>
          <div className='hor-line'></div>
        </div>
        <div className='livestock'>
          <div className='livestock-image'>
            <img src={servicecow} alt='' />
          </div>
          <div className='livestock-text'>
            <h1>Livestock Production</h1>
            <p>
              We raise a lot of livestock, including chickens, fish, and cattle.
              Additionally, we offer consulting to anyone who is interested.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreLivestock
