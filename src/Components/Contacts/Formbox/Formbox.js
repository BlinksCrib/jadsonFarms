import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Formbox.css'


const Formbox = () => {
    const [mailFrom, setMailFrom] = useState("")
    const [body, setBody] = useState("")
    const [sendername, setSendername] = useState("")


const onTop = (e) => {
  e.preventDefault()

  // Handling the form submission

  axios
    .post(
      'https://system.mailer.reni.tech/api/sendMail',
      JSON.stringify({
        apptoken: 'H8938H33R8H9',
        mailTo: 'info@jadsonfarms.com',
        mailFrom: mailFrom,
        body: body,
        subject: 'This is a message from jadsonfarms.com',
        sendername: sendername,
      })
    )
    .then((res) => {
      if (res.data.success === true) {
        // navigate('/profile')
        // props.history.push("/profile");
      } else {
      }
    })
}


  return (
    <section class='message'>
      <div class='pas'>
        <h1 data-aos='flip-right'>Write A Message to Us</h1>
        <form action=''>
          <div class='name'>
            <input
              type='text'
              name='sendername'
              onChange={(e) => setSendername(e.target.value)}
              value={sendername}
              id='na'
              placeholder='Can we know your Fullname...'
              required
              autoComplete='on'
            />
          </div>
          <div class='name'>
            <input
              type='email'
              name='mailFrom'
              onChange={(e) => setMailFrom(e.target.value)}
              value={mailFrom}
              id='na'
              placeholder='Your email address*'
              required
              autoComplete='on'
            />
          </div>
          <div class='write'>
            <textarea
              name=''
              id='writ'
              onChange={(e) => setBody(e.target.value)}
              value={body}
              cols='30'
              rows='10'
              placeholder='Write your message to us here...'
              required
            ></textarea>
          </div>
        </form>
        <div class='mid'>
          <button
            type='submit'
            class='contactus'
            onClick={(e) => onTop(e)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Formbox