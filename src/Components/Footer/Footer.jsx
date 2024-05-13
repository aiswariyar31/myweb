import React from 'react'
import './Footer.css'
import iswariyak from '../../assets/iswariyak.svg'
import githubicon from '../../assets/githubicon.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/email.svg'

const Footer = () => {
  return (
    
    <div className='footer'>
        <hr/>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={iswariyak} alt="" />
                <p>I'm a react js developer from kerala, India with 3 years of experience in Off-Page SEO, React and Python</p>
            </div>
            <div className="footer-top-right">
    <div className="sicon">
        <a href="https://www.linkedin.com/in/aiswariyakk/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
        </a>
    </div>
    <div className="sicon">
        <a href="mailto:aiswariyak33@gmail.com">
            <img src={email} alt="Email" />
        </a>
    </div>
    <div className="sicon">
        <a href="https://github.com/aiswariyar31" target="_blank">
            <img src={githubicon} alt="GitHub" />
        </a>
    </div>
</div>

        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Aiswariya K.  All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
