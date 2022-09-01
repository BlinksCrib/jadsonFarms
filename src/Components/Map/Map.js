import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className='preant-cont'>
      <div className='sub-map-cont'>
        <div className='map-cont'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0922097675057!2d3.9061924502933314!3d7.455050694595511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed522de783bf%3A0xfd6cec114987cc57!2sFireswitch%20Technology!5e0!3m2!1sen!2sng!4v1607517890431!5m2!1sen!2sng'
                width='100%'
                height='450'
                frameborder='3'
                style={{ border: 3 }}
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map
