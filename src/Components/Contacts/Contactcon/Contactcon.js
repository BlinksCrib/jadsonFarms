import React from 'react'
import './Contactcon.css'

const Contactcon = () => {
  return (
    <section className='contactc' id='contact'>
      <div className='pad'>
        <h1>Free Feel To Contact Us</h1>
        <div className='pacc'>
          <div className='contact-menuc'>
            <i className='fa-solid fa-location-dot'></i>
            <h4>Head Office </h4>
            <p>Federal House Estate, Oke Onitea, Osogbo, Osun State.</p>
            <h4>Branch Office</h4>
            <p>Km 3 Ikirun/Inisa Road, Ikirun, Osun State.</p>
          </div>
          <div className='contact-menuc'>
            <div className='backc'>
              <i className='fa-solid fa-phone'></i>
              <a href='tel:+234 815 1240 517'>
                <p>+234 815 1240 517</p>
              </a>
              <a href='tel:+234 907 1655 051'>
                <p>+234 907 1655 051</p>
              </a>
            </div>
          </div>
          <div className='contact-menuc'>
            <div className='backc'>
              <a href='mailto:jadsonfarms@gmail.com'>
                <i className='fa-regular fa-envelope'></i>
                <p>
                  {' '}
                  jadsonfarms <br />
                  @gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactcon
