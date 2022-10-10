import React from 'react'
import './Home.css'
import home from '../../../assets/home.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section class='expects'>
        <div class='all'>
          <div class='all-pad'>
            <div class='desk'>
              <h1>
                You can <span> Better</span> Your <span> Farm</span>
              </h1>
              <p>
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>
              <Link to='/service'>
                {' '}
                <button class='contacth'>Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class='mob'>
        <div class='mob1'>
          <div class='pade'>
            <div class='pad'>
              <h1>
                You can <span> Better</span> Your <span> Farm</span>
              </h1>
              <p>
                {' '}
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>{' '}
              <Link to='/service'>
                <button class='contacth1'>Explore</button>
              </Link>
            </div>
          </div>
          {/* <div class='mob-image'>
            <img src={home} alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home
