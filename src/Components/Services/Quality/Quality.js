import React from 'react'
import './Quality.css'
import servicemillet from '../../../assets/servicemillet.png'

const Quality = () => {
  return (
    <section className='about-us' id='quality'>
      <div className='pad' id='quality'>
        <div className='mining'>
          <div className='mining-text'>
            <h1>Quality Feed Milling</h1>
            <p>
              Our expertise extends to the milling and sales of high-quality
              feeds for poultry and fishes.
            </p>
          </div>
          <div className='mining-image'>
            <img src={servicemillet} alt='a millet' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quality
