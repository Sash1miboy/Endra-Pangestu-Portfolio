import React from 'react'
import './HeadProfile.css'

const headProfile = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="picName">
          <img src="/endraPhoto.png" alt="" className='myselfPic'/>
          <div className="picDesc">
            <span className='introName'>Hello, My Name is...</span>
            <span className='myName'>Endra Djati Pangestu</span>
            <span className='collegeName'>I am an Undergraduate Student <br /> at Binus University</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default headProfile