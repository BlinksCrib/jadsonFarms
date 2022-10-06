import React from 'react'
import './Consultancy.css'


const Consultancy = ({title}) => {
  return (
    <>
      <section class='about-us'>
        <div class='pad'>
          <div class='more'>
            <div class='mor'>
              <h1>{title}</h1>
              <div class='horr-line'></div>
            </div>
          </div>
          <div class='consultancy'>
            <div class='pat'>
              <h1>We offer Tested and Trusted Farm Consultancy</h1>
              <p>
                At <span>Jadson Farms</span> , we bring innovations to our
                Consultancy Services through tested and trusted services and
                systems for the continual growth of agriculture industry.
              </p>
              <button class='contact-us'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <section class='consult'>
        <div class='consultancy1'>
          <div class='pact'>
            <div class='pad'>
              <h1>We offer Tested and Trusted Farm Consultancy</h1>
              <p>
                At Jadson Farms, we bring innovations to our Consultancy
                Services through tested and trusted services and systems for the
                continual growth of agriculture industry.
              </p>
              <button class='contact-us1'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consultancy