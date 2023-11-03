import React, { useRef } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8i6b5v', 'template_2jryl28', form.current, 'ng7iZ0vBtaazy-ind')
      .then((result) => {
          console.log(result.text);
          alert("Mail Sent Successfully")
          form.current.reset();
          window.scrollTo(0, 0);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='Contact'>
      <h1 className='contact-me'>Contact Me</h1>
      <div className='cont-container'>
        <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Enter Your Name' name="your_name"/>
            <input placeholder='Enter Your E-Mail' name="your_email"/>
            <textarea placeholder='Enter Your Information' width='400px' name="message"/>
            <button type='submit' value="send" className='submit-btn'>Submit</button>
        </form> 
        <div className='contbar'></div>
        <div className='social-media'>
            <a href='https://www.facebook.com/Vishnu293'><FontAwesomeIcon icon={faFacebook} className='icon'/></a>
            <a href='https://x.com/vishnuu_here'><FontAwesomeIcon icon={faXTwitter} className='icon'/></a>
            <a href='https://instagram.com/im_vishnu293'><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            <a href='https://wa.me/918333007215'><FontAwesomeIcon icon={faWhatsapp} className='icon'/></a>
            <a href='mailto:vishnuyadav2932002@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
            <a href='https://github.com/Vishnu293'><FontAwesomeIcon icon={faGithub} className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
