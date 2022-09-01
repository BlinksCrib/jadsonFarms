import React from 'react';
import "./Footer.css";
import Jadsonbgremoved1 from '../../assets/Jadsonbgremoved1.png';

const Footer = () => {
  return (
    <div className='parent-cont'>
      <div className='sub-footer-cont'>
        <div className='footer-cont'>
          <div className='footer1'>
            <h4>JADSON INTEGRATED FARMS & SERVICES LTD.</h4>
            <img src={Jadsonbgremoved1} alt='' />
          </div>
          <div className='footer2'>
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='footer3'>
            <h4>Subscribe to get newsletters and notifications from us.</h4>
            <form action=''>
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter your email'
                className='mall' />{' '}
              <br />
              <input type='submit' value='Subscribe Now' 
              className='sub'/>
            </form>
            <div className='icons'>
                <div className='icon'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div className='icon'>
                  <i class='fa-brands fa-twitter'></i>
                </div>
                <div className='icon'>
                  <i class='fa-brands fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
