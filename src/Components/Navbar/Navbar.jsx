import React, {useState, useRef} from 'react'
import './Navbar.css'
import iswariyak from '../../assets/iswariyak.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu =() => {
    menuRef.current.style.right="0";
  }
  const closeMenu =() => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <div className='navlogo'>
      <img src={iswariyak} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Certificates</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        
      </ul>
      <div className='navbutton'>
      <div className="nav-connect"><Link to='drawings' className='anchor-link'>Retrospective Gallery</Link></div>
      </div>
    </div>
  )
}

export default Navbar
