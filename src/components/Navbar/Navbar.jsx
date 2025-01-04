import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>

  <nav className="navbar navbar-expand-lg  bg-Navbar fixed-top p-4 ">
  <div className="container">
    <Link className="navbar-brand font-navbar" to={"StartFrameWork"}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className='fas fa-bars text-white '></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="ul-navbar p-2 me-2" aria-current="page" to={"about"}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="ul-navbar p-2 me-2" to={"portfolio"}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="ul-navbar p-2 me-2" to={"contact"}>CONTACT</NavLink>
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>
  
  
  
  </>
}
