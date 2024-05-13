import React from 'react'
import './Hero.css'
import drawimg from '../../assets/drawimg.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={drawimg} alt="" />
      <h1><span>I'm Aiswariya K,</span>  SEO Executive |  React JS Developer | Front End & Back End.</h1>
      <p>I'm a react JS developer from Kerala, India. Dedicated M.Sc. Computer Science graduate from Kannur University with a fervent passion for coding and technology. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
        <a href="https://www.canva.com/design/DAFoJUGa_H8/1M2USHKu6DBqYjDQlqXrnQ/view?utm_content=DAFoJUGa_H8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank'>My resume</a>
        
        </div>
      </div>
    </div>
  )
}

export default Hero
