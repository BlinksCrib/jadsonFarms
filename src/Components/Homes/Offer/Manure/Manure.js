import React from 'react';
import manure from '../../../../assets/manure.png';

const Manure = () => {
  return (
    <div className='parent-cont'>
      <div className='stock-cont'>
        <div className='live-cont'>
          <div className='live_cont1'>
            <img src={manure} alt='' />
          </div>
          <div className='live_cont2'>
            <h1>
              <span>Livestock</span> Farming At its Best
            </h1>
            <p>
              We raise a lot of livestock, including chickens, fish, and cattle.
              Additionally, we offer consulting to anyone who is interested.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manure
