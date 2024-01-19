import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, []) 

  AOS.init({
    duration: 1000,
  })

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const serviceId = 'service_xp2vra6';
    const templateId = 'template_jb9xdpu';
    const publicKey = 'ePeiK5bfP-sVfd6Dl';

   
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'DriveVista',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className='contact-container' id='Contact-us'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className='emailForm'>
        <div className='input-container' data-aos = "zoom-in">
          <h3 style={{color: 'white'}}>Name: </h3>
          <input
          className='text-input-area'
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        </div>
      <div className='input-container' data-aos = "zoom-in">
      <h3 style={{color: 'white'}}>Email: </h3>
      <input
        className='text-input-area'
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className='input-container' data-aos = "zoom-in">
        <h3 style={{color: 'white'}}>Message: </h3>
        <textarea
        className='message-area'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style ={{resize: 'none'}}
      >
      </textarea>
      </div>
      <button type="submit" className='shopButton'>Send Message</button>
    </form>
    </div>
    
  )
}

export default Contact