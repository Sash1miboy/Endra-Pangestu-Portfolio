import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutMe'>
        <div className="container">
          <h1 className='aboutHeader'>About Me</h1>
          <hr className='lineAboutMe'/>
          <div className="descAboutMe">
            <div className="descPart">
              <span className="part1">I'm an undergraduate student at BINUS University, majoring in Computer Science with a passion for web development. My expertise is in front-end development where i am proficient in HTML, CSS, JavaScript, React.js, and UI/UX Design. I'm also familiar with back-end development like node.js, express.js, MongoDB, and MySQL and I'm continually learning more about software development.</span>
              <span className="part2">I enjoy developing design into functional software and love seeing how design and development work together to create something useful and valuable. My goal is to become a highly skilled software developer, not only technically but also in terms of teamwork, problem-solving, and leadership. I'm always passionately willing to learn and grow in technical and non-technical aspects of software development.</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe