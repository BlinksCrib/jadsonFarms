import React from 'react'
import "./Major.css"
import salute from '../../../../assets/salute.png'
import henhold from '../../../../assets/henhold.png'


const Major = () => {
  return (
    <div className='parent-cont'>
      <div className='major-cont'>
        <div className='sub_major-cont'>
          <div className='major1'>
            <h1>Our major business is Agriculture</h1>
            <p>
              At Jadson farm, we do food production as well as Farm support
              and/or consultancy Services
            </p>
          </div>
          <div className='major2'>
            <img className='major-img1' src={salute} alt='' />
            <img className='major-img2' src={henhold} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Major