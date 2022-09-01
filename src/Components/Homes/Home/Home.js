import React from 'react'
import './Home.css'
import setting from '../../../assets/setting.png'
import call from '../../../assets/call.png'

const Home = () => {
  return (
    <div className='parent-cont'>
      <div className='child-cont'>
        <div className='home_cont'>
          <div className='sub_content'>
            <div className='content1'>
              <h1>
                Improve your <span>farm</span> with our top-notch{' '}
                <span> Integration & Services</span>
              </h1>
              <p>
                Our primary line of business is food production as well as farm
                support and/or consulting services that satisfy the needs of our
                customers.
              </p>
            </div>
            <div className='content2'>
              <div className='card1 card'>
                <div className='sub_card'>
                  <img src={setting} alt='setting icon' />
                  <p>
                    We offer ranges of agricultural services for best
                    productivity.
                  </p>
                  <button className='service'>Our services</button>
                </div>
              </div>
              <div className='card2 card'>
                <div className='sub_card'>
                  <img src={call} alt='telephone' />
                  <p>
                    At Jadson Farms, we bring innovations to our Consultancy
                    Services.
                  </p>
                  <button className='contact'>Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
