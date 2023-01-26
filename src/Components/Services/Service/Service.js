import React from 'react'
import './Service.css'
import { HashLink } from 'react-router-hash-link'

const Service = () => {
  return (
    <>
      <section className='support'>
        <div className='all'>
          <div className='all-pad'>
            <div className='desk'>
              <h1>
                <span className='first'>Agriculture</span> and
                <span className='first'> Farm </span> Support
              </h1>
              <p>
                {' '}
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contacts'>Contact us</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      <section className='mob'>
        <div className='mob1'>
          <div className='pades'>
            <div className='pad'>
              <h1>
                <span className='first'>Agriculture</span> and
                <span className='first'> Farm </span> Support
              </h1>
              <p>
                {' '}
                At JADSON, food production is our main business, along with
                agricultural assistance and/or consulting services that meet the
                demands of our clients.
              </p>
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button className='contacts1'>Contact us</button>
              </HashLink>
            </div>
          </div>
          {/* <div className="mob-image">
                <img src={service} alt="" />
            </div> */}
        </div>
      </section>
    </>
  )
}

export default Service
