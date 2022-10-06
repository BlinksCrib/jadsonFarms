import React from 'react'
import "./Livestock.css"
import we from "../../../../assets/we.png"

const Livestock = () => {
  return (
    <div className='parent-cont'>
      <div className='livestock-cont'>
        <div className='live-cont'>
          <div className='live_cont2'>
            <h1>
              Who we are
            </h1>
            <p>
              Our major business is Agriculture, food production as well as Farm
              support and/or consultancy Services that will meet the
              expectations of our clients.
            </p>
            <p>
              Given the novelty of our ideas and strengths in agro and allied
              industry,{' '}
              <span style={{color: "var(--contact-back)"}}>
                Jadson Farms is ranked among the leading companies with wealth
                of experience,
              </span>{' '}
              affordable and acceptable solution to farming business in Nigeria.
            </p>
          </div>
          <div className='live_cont1'>
            <img src={we} alt='' className='livestock-picture' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Livestock
