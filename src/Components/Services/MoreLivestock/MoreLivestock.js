import React, { useState } from 'react'
import { Carousel } from 'antd'
import "./MoreLivestock.css"
import fish from "../../../assets/fish.png"
import pig from "../../../assets/pig.png"
import hen from "../../../assets/hen.png"

const contentStyle = {
  height: '80vh',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  objectFit: 'cover',
}


const MoreLivestock = () => {
  const [dotPosition, setDotPosition] = useState('right')

  return (
    <div className='parent-cont'>
      <div className='sub-morelivestock-cont'>
        <div className='morelivestock-cont'>
          <div className='livestock1-cont'>
            <Carousel autoplay dotPosition={dotPosition} effect='fade'>
              <div className='fulllivestock'>
                <img src={hen} alt='hens' style={contentStyle} />
              </div>
              <div className='fulllivestock'>
                <img src={fish} alt='hens' style={contentStyle} />
              </div>
              <div className='fulllivestock'>
                <img src={pig} alt='hens' style={contentStyle} />
              </div>
              <div className='fulllivestock'>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreLivestock