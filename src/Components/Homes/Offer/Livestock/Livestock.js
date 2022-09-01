import React from 'react'
import "./Livestock.css"
import cow from "../../../../assets/cow.png"

const Livestock = () => {
  return (
    <div className='parent-cont'>
      <div className='livestock-cont'>
        <div className='live-cont'>
            <div className='live_cont1'>
              <img src={cow} alt='' className='about-picture' />
            </div>
            <div className='live_cont2'>
              <h1>
                <span>Livestock Farming</span> At its Best
              </h1>
              <p>
                We raise a lot of livestock, including chickens, fish, and
                cattle. Additionally, we offer consulting to anyone who is
                interested.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Livestock
