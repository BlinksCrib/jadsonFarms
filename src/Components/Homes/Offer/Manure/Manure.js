import React from 'react'
import { Link } from 'react-router-dom'
// import fish from '../../../../assets/fish.png';
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
            <Link to='/service'>
              <button className='manure-but'>Learn more</button>
            </Link>
          </div>
          <div className='manure2'>
            <h4>
              Feed <br /> Milling
            </h4>
            <a href='/service#quality'>
              <button className='manure-but'>Learn more</button>
            </a>
          </div>
          <div className='manure3'>
            <h4>
              Manure <br /> Processing
            </h4>
            <Link to='/service'>
              <button className='manure-but'>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manure
