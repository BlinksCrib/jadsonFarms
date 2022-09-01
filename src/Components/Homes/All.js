import React from 'react'
import ContactBox from '../ContactBox/ContactBox'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import Home from './Home/Home'
import Offer from './Offer/Offer'
import Tested from './Tested/Tested'

const All = () => {
  return (
    <div style={{ backgroundColor: '#F6FFF9' }}>
      <Home />
      <Offer />
      <Tested />
      <ContactBox />
      <Map />
      <Footer />
    </div>
  )
}

export default All
