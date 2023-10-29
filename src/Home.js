import './Home.css'
import React from 'react'

const Home = () => {
  return (
      <div className='home' id='Home'>
          <p className='name'>Hi 👋,</p>
          <p className='name'>I'm <span>Vishnu,</span></p>
          <p className='cont'><span>FrontEnd</span> Web Developer</p>
          <p className='main'>A Front-End Developer with entry-level experience <br/> specializing in web development, user interface design, HTML and React JS.</p>
          <button className='btn1'>Resume</button>
      </div>
  )
}

export default Home
