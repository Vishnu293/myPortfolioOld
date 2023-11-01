import './Projects.css'
import React from 'react'
import porto from './VA1.png'

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <h1 className='project'>Projects</h1>
      <div className='projects-container'>
        <div className='project-cont'>
            <img src={porto} alt='pro1' className='pro-images'/>
            <p className='pro-name'>Personal Portfolio</p>
            <p className='pro-text'><div className='pro-head'>Personal Portfolio</div>My personal portfolio project is a showcase of my skills, experience, and creative work. 
            This web-based portfolio serves as a central hub where I present my professional background, including my education, work history, and skills. 
            It features a collection of my most notable projects, each with detailed descriptions and visuals, allowing visitors to gain insights into my capabilities and style. 
            The portfolio is designed with a user-friendly and responsive interface, ensuring that it looks great on various devices. It reflects my personality and creativity, providing a glimpse into my journey as a professional in a visually appealing and informative manner.</p>
        </div>
        <div className='project-cont'>
            <img src={porto} alt='pro1' className='pro-images'/>
            <p className='pro-name'>Personal Portfolio</p>
            <p className='pro-text'><div className='pro-head'>Personal Portfolio</div>My personal portfolio project is a showcase of my skills, experience, and creative work. 
            This web-based portfolio serves as a central hub where I present my professional background, including my education, work history, and skills. 
            It features a collection of my most notable projects, each with detailed descriptions and visuals, allowing visitors to gain insights into my capabilities and style. 
            The portfolio is designed with a user-friendly and responsive interface, ensuring that it looks great on various devices. It reflects my personality and creativity, providing a glimpse into my journey as a professional in a visually appealing and informative manner.</p>
        </div>
        <div className='project-cont'>
            <img src={porto} alt='pro1' className='pro-images'/>
            <p className='pro-name'>Personal Portfolio</p>
            <p className='pro-text'><div className='pro-head'>Personal Portfolio</div>My personal portfolio project is a showcase of my skills, experience, and creative work. 
            This web-based portfolio serves as a central hub where I present my professional background, including my education, work history, and skills. 
            It features a collection of my most notable projects, each with detailed descriptions and visuals, allowing visitors to gain insights into my capabilities and style. 
            The portfolio is designed with a user-friendly and responsive interface, ensuring that it looks great on various devices. It reflects my personality and creativity, providing a glimpse into my journey as a professional in a visually appealing and informative manner.</p>
        </div>
      </div>
      <button className='pro-btn'>Show More</button>
    </div>
  )
}

export default Projects
