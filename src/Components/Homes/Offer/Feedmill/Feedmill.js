import React from 'react';
import feedmill from "../../../../assets/feedmill.png";
import "./Feedmill.css"


const Feedmill = () => {
  return (
    <div className='parent-cont'>
      <div className='stock-cont'>
        <div className='feedmill-cont'>
          <div className='live_cont2'>
            <h1>
              <span>Livestock</span> Farming At its Best
            </h1>
            <p>
              We raise a lot of livestock, including chickens, fish, and cattle.
              Additionally, we offer consulting to anyone who is interested.
            </p>
          </div>
          <div className='live_cont1'>
            <img src={feedmill} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedmill
