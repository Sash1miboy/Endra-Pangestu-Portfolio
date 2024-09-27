import React from 'react'
import './Skills.css'
import { proggramingLanguages, tools } from '../../data.js'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="container">
            <h1 className="skillsHeader">Skills</h1>
            <hr className="skillsLine" />
            <div className="skillsTab">
                <div className="programmingLanguages">
                    <h2 className="plTitle">Programming Languages</h2>
                    <div className="plGrid">
                      {proggramingLanguages.map(language => (
                        <div key={language.id} className="plItem">
                          <img src={language.image} alt={language.image} className='plIcon'/>
                          <span className='plName'>{language.name}</span>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="tools">
                  <h2 className='toolsTitle'>Tools</h2>
                  <div className="toolsGrid">
                    {tools.map(tl => (
                      <div key={tl.id} className="toolsItem">
                        <img src={tl.image} alt={tl.image} className='tlIcon'/>
                        <span className='tlName'>{tl.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills