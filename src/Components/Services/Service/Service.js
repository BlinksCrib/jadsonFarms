import React from 'react'
import './Service.css'
import { HashLink } from 'react-router-hash-link'


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
              <HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contacts'>Contact us</button>
              </HashLink>
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
              </p><HashLink
                to={'/contact/#cop'}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <button class='contacts1'>Contact us</button>
              </HashLink>
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
