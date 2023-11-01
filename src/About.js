import './About.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faHtml5, faCss3Alt, faJsSquare, faReact, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='aboutContainer' id='About'>
        <h1 className='about' id='about'>About</h1>
        <div className='text'>
        <p className='im'>• I'm Vishnu C, A highly passionate, and hardworking fresher looking for an opportunity to work in a challenging
          organization to utilize and enhance my skills and knowledge to work for the growth of the organisation.
          <br/> • My objective is simply to be the best Web Developer that I can be.</p><br/>
        </div>
        <h1 className='skills'>Skills</h1>
        <div className='skillslist'>
          <div className='skl'>
            <FontAwesomeIcon icon={faJava} className='icon'/>
            <p className='title'>Java</p>
          </div>
          <div className='skl'>
           <FontAwesomeIcon icon={faPython} className='icon'/>
            <p className='title'>Python</p>
          </div>
          <div className='skl'>
            <FontAwesomeIcon icon={faHtml5} className='icon'/>
            <p className='title'>HTML</p>
          </div>
          <div className='skl'>
           <FontAwesomeIcon icon={faCss3Alt} className='icon'/>
            <p className='title'>CSS</p>
          </div>
          <div className='skl'>
            <FontAwesomeIcon icon={faJsSquare} className='icon'/>
            <p className='title'>JavaScript</p>
          </div>
          <div className='skl'>
           <FontAwesomeIcon icon={faReact} className='icon'/>
            <p className='title'>React JS</p>
          </div>
          <div className='skl'>
           <FontAwesomeIcon icon={faGithub} className='icon'/>
            <p className='title'>GitHub</p>
          </div>
        </div>
    </div>
  )
}

export default About
