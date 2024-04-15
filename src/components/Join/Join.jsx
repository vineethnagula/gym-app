import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ff1p7n6', 'template_sk3hxpj', form.current, {
        publicKey: '2PQ0GDt8jGCaMZZiP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='Join' id='Join-us'>
      <div className="left-j">
        <hr/>
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j"></div>
      <form ref={form} className='email-container' onSubmit={sendEmail}>
        <input type='email' name='user_email' placeholder='Enter your Email address'/>
        <button className='btn btn-j'>Join Now</button>
      </form>
    </div>
  )
}

export default Join
