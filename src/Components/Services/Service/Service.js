import React from 'react'
import './Service.css'
import service from '../../../assets/service.png'
import { Link } from 'react-router-dom'


const Service = () => {
  return (
    <>
      <section class='support'>
        <div class='all'>
          <div class='all-pad'>
            <div class='desk'>
              <h1>
                <span class='first'>Agriculture</span> and
                <span class='first'> Farm </span> Support
              </h1>
              <p>
                {' '}
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>
              <Link to='/contact'>
                <button class='contacts'>Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class='mob'>
        <div class='mob1'>
          <div class='pades'>
            <div class='pad'>
              <h1>
                <span class='first'>Agriculture</span> and
                <span class='first'> Farm </span> Support
              </h1>
              <p>
                {' '}
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>
              <Link to='/contact'>
                <button class='contacts1'>Contact us</button>
              </Link>
            </div>
          </div>
          {/* <div class="mob-image">
                <img src={service} alt="" />
            </div> */}
        </div>
      </section>
    </>
  )
}

export default Service
