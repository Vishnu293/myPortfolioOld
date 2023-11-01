import './Certify.css'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'; 


const Certify = () => {
  return (
    <div className='certify-container' id='Certify'>
      <h1 className='certifications'>Certifications</h1>
      <div className='certify-block'>
        <table>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>Git for Beginners<div className='company'>( Udemy - Oct, 2023 )</div></td>
            <td><a className='links' href='http://ude.my/UC-d3ab3f48-1e3e-4450-90c1-f773ecfc448a'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>ML & Self-Driving Cars: Bootcamp with Python<div className='company'>( Udemy - Sep, 2023 )</div></td>
            <td><a className='links' href='http://ude.my/UC-ee410ab6-74b4-47a9-9cc0-2f14d9b05952/'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>Introduction to Artificial Intelligence<div className='company'>( LinkedIn Learning - Jul, 2023 )</div></td>
            <td><a className='links' href='https://www.linkedin.com/learning/certificates/dc7210aa361c881fd4524a48017d6a1ae8db4f41ffea42f026e46d656f09b757'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>Generative AI: The Evolution of Thoughtful Online Search<div className='company'>( LinkedIn Learning - Jul, 2023 )</div></td>
            <td><a className='links' href='https://www.linkedin.com/learning/certificates/8682d51af0033632928eb646b73f7a20c62ba7912db8b6090a322b5c5db01da9'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>JavaScript<div className='company'>( Sololearn - Dec, 2022 )</div></td>
            <td><a className='links' href='https://www.sololearn.com/certificates/course/en/24258208/1024/landscape/png'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>Introduction to Cyber Security<div className='company'>( Simplilearn - Nov, 2022 )</div></td>
            <td><a className='links' href='https://simpli.app.link/2vwS5Iypovb'>Verify</a></td>
          </tr>
          <tr>
            <td><i class="fas fa-arrow-right"></i></td>
            <td className='certify-name'>Introduction to Internet Of Things<div className='company'>( NPTEL - Nov, 2022 )</div></td>
            <td><a className='links' href=''>Verify</a></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Certify
