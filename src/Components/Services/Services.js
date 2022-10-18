import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Consultancy from '../Abouts/Consultancy/Consultancy'
import Footer from '../Footer/Footer'
import Also from './Also/Also'
import MoreLivestock from './MoreLivestock/MoreLivestock'
import Practice from './Practice/Practice'
import Quality from './Quality/Quality'
import Service from './Service/Service'

const Services = () => {
  // const routepath = useLocation()
  // const onTop = () => {
  //   window.scrollTo(0, 0)
  // }

  // useEffect(() => {
  //   onTop()
  // }, [routepath])

  return (
    <div className="parent-cont" style={{marginTop: "10vh"}}>
      <Service />
        <MoreLivestock />
        <Quality />
        <Practice />
        <Also />
        <Consultancy />
        <Footer />
    </div>
  )
}

export default Services