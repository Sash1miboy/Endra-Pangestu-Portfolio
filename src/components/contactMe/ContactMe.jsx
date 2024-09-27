import React from 'react'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div className='contactMe'>
        <div className="container">
            <h1 className="contactHeader">Contact Me</h1>
            <hr className="lineContact" />
            <div className="contactList">
                <a href="https://www.instagram.com/endra.djati/" className="instaItem">
                    <img src="/instagram.svg" alt="" />
                    <span>@endra.djati</span>
                </a>
                <a href="https://www.linkedin.com/in/endra-pangestu-a0aa88253/" className="linkedInItem">
                    <img src="/linkedin.svg" alt="" />
                    <span>Endra Pangestu</span>
                </a>
                <a href="https://wa.me/6281219787703" className="whatsappItem">
                    <img src="/whatsapp.svg" alt="" />
                    <span>(+62) 812 1978 7703</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactMe