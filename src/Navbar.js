import React, { useRef } from 'react'
import logo from './VA1.png'
import './Navbar.css'

const Navbar = () => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='menu'>
          <a className='menuitems'>Home</a>
          <a className='menuitems' onClick={() => scrollToComponent('About')}>About</a>
          <a className='menuitems' onClick={() => scrollToComponent('Home')}>Projects</a>
          <a className='menuitems' onClick={() => scrollToComponent('Home')}>Achievements</a>
        </div>
        <div class="hamburger" id="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <button className='btn'>Contact Me</button>
    </div>
  )
}

export default Navbar
