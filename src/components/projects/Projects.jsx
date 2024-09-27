import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects'>
        <div className="container">
            <h1 className='projectHeader'>Project</h1>
            <hr className='lineProject'/>
            <div className="projectList">
                <div className="projectItem">
                    <img src="/babonPreview.png" alt="Babon Preview" className='projectPic'/>
                    <div className="projectInfo">
                        <h1 className='projectTitle'>Babon</h1>
                        <span className='projectDesc'>I am currently developing a fullstack web application called “Babon,” which offers various services to users. The project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), providing a robust and scalable solution for delivering seamless user experiences.</span>
                        <span className="projectSkillUsed">Skills Used: HTML, CSS, JavaScript, React.js, Node,js, Express.js, MongoDB, Figma, and Trello</span>
                        <span className='projectLink'>Link: <a href="https://github.com/Sash1miboy/Babon.git">https://github.com/Sash1miboy/Babon.git</a></span>
                    </div>
                </div>
                <div className="projectItem">
                    <img src="/JETFLIXPreview.png" alt="Babon Preview" className='projectPic'/>
                    <div className="projectInfo">
                        <h1 className='projectTitle'>JETFLIX</h1>
                        <span className='projectDesc'>As part of an assignment at BINUS University, I developed the front end of JETFLIX, a Netflix clone. This project allowed me to enhance my skills in HTML, CSS, and JavaScript, creating a responsive and visually appealing user interface.</span>
                        <span className="projectSkillUsed">Skills Used: HTML, CSS, and JavaScript</span>
                        <span className='projectLink'>Link: <a href="https://sash1miboy.github.io/JETFLIX.github.io/">https://sash1miboy.github.io/JETFLIX.github.io/</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects