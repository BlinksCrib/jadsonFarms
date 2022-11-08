import React from 'react'
import "./MoreLivestock.css"
import servicecow from '../../../assets/servicecow.png'




const MoreLivestock = () => {

  return (
    <section class='about-us' id="livestock">
      <div className='pad'>
        <div
          class='do'
        >
          <h1>What we do</h1>
          <div class='hor-line'></div>
        </div>
        <div class='livestock'>
          <div
            class='livestock-image'
          >
            <img src={servicecow} alt='' />
          </div>
          <div
            class='livestock-text'
          >
            <h1>Livestock Production</h1>
            <p>
              We raise a lot of livestock, including chickens, fish, and cattle.
              Additionally, we offer consulting to anyone who is interested.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreLivestock