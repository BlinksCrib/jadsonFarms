import React from 'react'
import "./ContactBox.css"
import ContBox from './ContBox/ContBox'

const ContactBox = () => {
  return (
    <div className='parent-cont'>
      <ContBox />
      <div className='sub_contact_box'>
        <div className='contact-box'>
          <div className='btn1 box'>
            <h4>
              <span>Head Office</span>
            </h4>
            <h4>Federal House Estate,</h4>
            <h4>Oke Onitea, Osogbo, Osun State</h4>
          </div>
          <div className='btn2 box'>
            <h4>
              <span>Our Branch</span>
            </h4>
            <h4> Km 3 Ikirun/Inisa Road,</h4>
            <h4>Ikirun, Osun State</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBox
