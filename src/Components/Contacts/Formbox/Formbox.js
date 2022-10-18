import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Formbox.css'

const Formbox = () => {
  const [mailFrom, setMailFrom] = useState('')
  const [body, setBody] = useState('')
  const [sendername, setSendername] = useState('')

  const [messageResponse, setMessageResponse] = useState('')

  const [timeOut, setTimeOut] = useState(false)

  const [loading, setLoading] = useState(false)

  const onTop = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setTimeOut(false)
    }, 10000)
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
          setLoading(false)
          setMessageResponse(res.data.message)
          setTimeOut(true)
          setMailFrom('')
          setBody('')
          setSendername('')
          // navigate('/profile')
          // props.history.push("/profile");
        } else {
          setLoading(false)
        }
      })
  }

  return (
    <section class='message' id='cop'>
      <div class='pas'>
        <h1 data-aos='flip-right'>Write A Message to Us</h1>
        <form>
          <div class='name'>
            <input
              type='text'
              name='sendername'
              onChange={(e) => setSendername(e.target.value)}
              value={sendername}
              id='na'
              placeholder='Can we know your Full Name...'
              required
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
        {timeOut ? (
          <p style={{ textAlign: 'center', color: '#fff' }}>
            {messageResponse}
          </p>
        ) : (
          <></>
        )}
        <div class='mid'>
          {loading ? (
            <button
              type='submit'
              class='contactus'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
              disabled
            >
              Sending...
            </button>
          ) : (
            <button type='submit' class='contactus' onClick={(e) => onTop(e)}>
              Send
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Formbox
