import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
      <h1 className='contact-me'>Contact Me</h1>
      <div className='cont-container'>
        <form>
            <input placeholder='Enter Your Name'/>
            <input placeholder='Enter Your E-Mail'/>
            <textarea placeholder='Enter Your Information' width='400px'/>
            <button className='submit-btn'>Submit</button>
        </form>
        <div className='contbar'></div>
        <div className='social-media'>
            <a href='https://www.facebook.com/Vishnu293'><FontAwesomeIcon icon={faFacebook} className='icon'/></a>
            <a href='https://x.com/vishnuu_here'><FontAwesomeIcon icon={faXTwitter} className='icon'/></a>
            <a href='https://instagram.com/im_vishnu293'><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            <a href='https://wa.me/918333007215'><FontAwesomeIcon icon={faWhatsapp} className='icon'/></a>
            <a href='mailto:vishnuyadav2932002@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
