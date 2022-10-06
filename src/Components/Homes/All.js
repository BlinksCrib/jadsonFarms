import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Consultancy from '../Abouts/Consultancy/Consultancy'
import Contactabout from '../Abouts/Contactabout/Contactabout'
import Foot from './Foot/Foot'
import Home from './Home/Home'
import Offer from './Offer/Offer'

const All = () => {
  const routepath = useLocation()
  const onTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    onTop()
  }, [routepath])
  
  return (
    <div style={{marginTop: "10vh"}}>
      <Home />
      <Offer />
      <Consultancy />
      <Contactabout />
      <Foot />
    </div>
  )
}

export default All
