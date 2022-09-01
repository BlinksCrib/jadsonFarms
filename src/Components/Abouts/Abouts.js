import React from 'react'
import ContactBox from '../ContactBox/ContactBox'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import About from './About/About'
import AboutButton from './AboutButton/AboutButton'
import More from './More/More'
import Support from './Support/Support'
import Weare from './Weare/Weare'

const Abouts = () => {
  return (
    <div>
      <About />
      <Weare />
      <Support />
      <More />
      <AboutButton />
      <Map />
      <ContactBox />
      <Footer />
    </div>
  )
}

export default Abouts
