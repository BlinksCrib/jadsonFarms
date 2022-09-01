import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='parent-cont'>
      <div className='sub-contact-cont'>
        <div className='contact-cont'>
          <div className='contact1'>
            <div className='cont1'>
              <h4>Contact Us</h4>
              <div className='cont2'>
                <p>jadsonfarms@gmail.com</p>
              </div>
              <hr />
              <div className='cont3'>
                <p>08151240517</p>
                <p>09071655051</p>
                <hr />
                <div className='cont4'>
                  <h4>Head Office </h4>
                  <p>Federal House Estate, Oke Onitea, Osogbo, Osun State.</p>
                </div>
                <div className='cont5'>
                  <h4>Branch Office </h4>
                  <p>Km 3 Ikirun/Inisa Road, Ikirun, Osun State.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contacts2'>
            <div className='contact2'>
              <h4>Write freely to us anytime</h4>
              <form action=''>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Enter your email'
                  className='mall'
                />{' '}
                <br />
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Your Message'
                ></textarea>
                <br />
                <input type='submit' value='Send' className='sub' />
              </form>
            </div>
            <div className='iconss'>
              <div className='icons'>
                <i class='fa-brands fa-facebook-f'></i>
              </div>
              <div className='icons'>
                <i class='fa-brands fa-twitter'></i>
              </div>
              <div className='icons'>
                <i class='fa-brands fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact