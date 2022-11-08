import React from 'react'
import "./Map.css"

const Map = () => {

google.maps.event.addListenerOnce(map, 'idle', () => {
  document.getElementsByTagName('iframe')[0].title = 'Google Maps'
})
  
  return (
    <div
      className='preant-cont'
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
