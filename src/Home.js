import './Home.css'
import React from 'react'
import myResume from './resumeCVN.pdf'

const Home = () => {
  return (
      <div className='home' id='Home'>
          <p className='name'>Hi 👋,</p>
          <p className='name'>I'm <span>Vishnu,</span></p>
          <p className='cont'><span>FrontEnd</span> Web Developer</p>
          <p className='main'>A Front-End Developer with entry-level experience <br/> specializing in web development, user interface design, HTML and React JS. <br/> A highly passionate, and hardworking fresher looking for an opportunity to work in a challenging organization <br/> to utilize and enhance my skills and knowledge to work for the growth of the organisation. </p>
          <button className='btn1'><a href={myResume} download>My Resume</a></button>
      </div>
  )
}

export default Home
