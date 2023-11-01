import React from 'react'
import logo from './VA1.png'
import './Navbar.css'

const Navbar = () => {
  const scrollToComponent = (id, offset=0) => {
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className='navbar-cont'>
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo' onClick={() => scrollToComponent('Home',100)}/>
        <div className='menu'>
          <a className='menuitems' onMouseOver={() => scrollToComponent('Home',100)}>Home</a>
          <a className='menuitems' onMouseOver={() => scrollToComponent('About',50)}>About</a>
          <a className='menuitems' onMouseOver={() => scrollToComponent('Projects',50)}>Projects</a>
          <a className='menuitems' onMouseOver={() => scrollToComponent('Certify',50)}>Certifications</a>
        </div>
        <div class="hamburger" id="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <button className='btn' onClick={() => scrollToComponent('Contact')}>Contact Me</button>
    </div>
    </div>
  )
}

export default Navbar
