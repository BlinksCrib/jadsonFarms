import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Manure.css'

const Manure = () => {
  return (
    <div className='parent-cont'>
      <div className='manures-cont'>
        <div className='manure-cont'>
          <div className='manure1'>
            <h4>
              Livestock <br /> Production
            </h4>
            <HashLink
              to={'/service/#livestock'}
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              <button className='manure-but'>Learn more</button>
            </HashLink>
          </div>
          <div className='manure2'>
            <h4>
              Feed <br /> Milling
            </h4>
            <HashLink
              to={'/service/#quality'}
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              <button className='manure-but'>Learn more</button>
            </HashLink>
          </div>
          <div className='manure3'>
            <h4>
              Manure <br /> Processing
            </h4>
            <HashLink
              to={'/service/#practice'}
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              <button className='manure-but'>Learn more</button>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manure
