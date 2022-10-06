import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import Contact from './Contact/Contact'
import Contactcon from './Contactcon/Contactcon'
import Formbox from './Formbox/Formbox'

const Contacts = () => {
  const routepath = useLocation()
  const onTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    onTop()
  }, [routepath])

  return (
    <div className="parent-cont" style={{marginTop: "10vh"}}>
        <Contact /> 
        <Contactcon />
        <Formbox />
        <Map />
        <Footer />
    </div>
  )
}

export default Contacts