import React from 'react'
import './HeadProfile.css'

const headProfile = () => {
  return (
    <div className="headProfile">
      <div className="container">
        <div className="picName">
          <img src="/endraPhoto.png" alt="Endra Djati Pangestu" className='myselfPic'/>
          <div className="picDesc">
            <span className='introName'>Hello, My Name is...</span>
            <span className='myName'>Endra Djati Pangestu</span>
            <span className='collegeName'>I'm an Undergraduate Student <br /> at Binus University</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default headProfile