import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import About from './About/About'
import Clients from './Clients/Clients'
import Consultancy from './Consultancy/Consultancy'
import Contactabout from './Contactabout/Contactabout'
import Support from './Support/Support'
import Weare from './Weare/Weare'

const Abouts = () => {
  const routepath = useLocation();
  const onTop = () =>{
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    onTop()
  }, [routepath])
  
  return (
    <div style={{ marginTop: '10vh' }}>
      <About />
      <Weare />
      <Support />
      <Clients />
      <Consultancy />
      <div style={{ marginBottom: '4rem' }}>
        <Contactabout />
      </div>
      <Map />
      <Footer />
    </div>
  )
}

export default Abouts
