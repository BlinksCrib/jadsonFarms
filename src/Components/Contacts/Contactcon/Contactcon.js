import React, { useEffect } from 'react'
import './Contactcon.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contactcon = () => {


  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <section class='contactc' id='contact'>
      <div class='pad'>
        <h1 data-aos='fade-up'>Free Feel To Contact Us</h1>
        <div class='pacc' data-aos='fade-right'>
          <div class='contact-menuc'>
            <i class='fa-solid fa-location-dot'></i>
            <h4>Head Office </h4>
            <p>Federal House Estate, Oke Onitea, Osogbo, Osun State.</p>
            <h4>Branch Office</h4>
            <p>Km 3 Ikirun/Inisa Road, Ikirun, Osun State.</p>
          </div>
          <div class='contact-menuc' data-aos='fade-left'>
            <div class='backc'>
              <i class='fa-solid fa-phone'></i>
              <a href='tel:+234 815 1240 517'>
                <p>+234 815 1240 517</p>
              </a>
              <a href='tel:+234 907 1655 051'>
                <p>+234 907 1655 051</p>
              </a>
            </div>
          </div>
          <div class='contact-menuc' data-aos='fade-left'>
            <div class='backc'>
              <a href='mailto:jadsonfarms@gmail.com'>
                <i class='fa-regular fa-envelope'></i>
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
