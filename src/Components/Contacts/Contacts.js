import React from 'react'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import Contact from './Contact/Contact'

const Contacts = () => {
  return (
    <div className="parent-cont">
        <Contact /> 
        <Map />
        <Footer />
    </div>
  )
}

export default Contacts