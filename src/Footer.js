import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
  return (
    <div className='Footer'>
      <p>Copyright <FontAwesomeIcon icon={faCopyright} className='icon'/> 2023. All Rights Reserved | Designed by Vishnu C</p> 
    </div>
  )
}

export default Footer
