import React, { useEffect } from 'react'
import "./Map.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Map = () => {


  useEffect(() => {
    AOS.init()
  }, [])

  
  return (
    <div
      className='preant-cont'
      data-aos='fade-right'
      data-aos-offset='300'
      data-aos-easing='ease-in-sine'
    >
      <div className='sub-map-cont'>
        <div className='map-cont'>
          <iframe
            src='https://maps.google.com/maps?q=Federal%20House%20Estate,%20Oke%20Onitea,%20Osogbo,%20Osun%20State.&t=&z=13&ie=UTF8&iwloc=&output=embed'
            width='100%'
            height='450'
            frameBorder='3'
            style={{ border: 3 }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map
