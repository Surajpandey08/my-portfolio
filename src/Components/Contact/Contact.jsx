import React from 'react'
import { useState } from 'react';
import "./Contact.css"

import emailjs from 'emailjs-com';


export const Contact = () => {

  const [messageSent, setMessageSent] =useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qmhkuob', 'template_1xv3w8j', e.target, 'z1Z-8b27YLtGHM_Rg',)
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


    
  return (
    <section id='contact'>
        <h1>Contact Me</h1>
        <div className='contact-form'>

         <form  onSubmit={sendEmail}>
            <input type="name" name='name' placeholder='Your Full Name' autocomplete="off"   required/>
            <input type="email" name='email' placeholder='Enter Your Email' autocomplete="off"   required />
           <textarea name="message" rows="7"  placeholder='Enter Your Message' required></textarea>
            <button className='btn' type='submit'>Send Message</button>
         </form>

         {messageSent ? ( 
          <div className='form-description'>
            <p>Thanks for reaching out. I'll get back to you ASAP!</p>
          </div>
        ):(
          <div className='form-description'>
          <p>Use this form to get in touch with me. Whether you have questions, feedback, or inquiries about my services, I am here to help. I'll get back to you as soon as possible.</p>
       </div>

        )}
       
        

        </div>

        
    </section>
  )
}
