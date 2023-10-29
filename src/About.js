import './About.css'
import React from 'react'
import aboutimg from './chris.png'

const About = () => {
  return (
    <div className='aboutContainer' id='About'>
        <h1 className='about' id='about'>About</h1>
        <div className='text'>
        <p className='im'>I'm Vishnu C, a dedicated Front-End Web Developer with a passion for creating exceptional user experiences.</p><br/>
        <p>        My skills include:<br/>
                - HTML/CSS for crafting clean and responsive layouts.<br/>
                - JavaScript for building interactive and dynamic web applications.<br/>
                - React.js for developing efficient and modular user interfaces.<br/>
                - Problem-solving and tackling complex challenges.<br/>
                - Version control using Git and GitHub.</p>
        </div>
    </div>
  )
}

export default About
