import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='expects'>
        <div className='all'>
          <div className='all-pad'>
            <div className='desk'>
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
                <button className='contacth'>Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='mob'>
        <div className='mob1'>
          <div className='pade'>
            <div className='pad'>
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
                <button className='contacth1'>Explore</button>
              </Link>
            </div>
          </div>
          {/* <div className='mob-image'>
            <img src={home} alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home
